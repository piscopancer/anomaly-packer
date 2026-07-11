#!/usr/bin/env python3
"""Build a C++ enumerator -> integer value map by scanning all headers/sources
in an engine repo. Handles `= N`, hex, auto-increment, and references to a
previously-seen enumerator (`= eOther`). Best-effort: unresolved stay as None.
Usage: enum_resolve.py <repo_src> <symbol1> <symbol2> ...
Prints  symbol = value  for each requested symbol (or the whole map if none).
"""
import os, re, sys

ROOT = sys.argv[1]
wanted = set(sys.argv[2:])

enum_body_re = re.compile(r'\benum\b(?:\s+class)?(?:\s+\w+)?(?:\s*:\s*[\w:\s]+)?\s*\{(.*?)\}', re.S)

symbol_val = {}

def parse_enum(body):
    cur = 0
    for raw in body.split(','):
        item = raw.strip()
        if not item:
            continue
        m = re.match(r'([A-Za-z_]\w*)\s*(?:=\s*(.+))?$', item, re.S)
        if not m:
            continue
        name = m.group(1)
        expr = m.group(2)
        if expr is not None:
            expr = expr.strip()
            v = eval_expr(expr)
            if v is None:
                # can't resolve; skip advancing reliably
                symbol_val.setdefault(name, None)
                continue
            cur = v
        symbol_val[name] = cur
        cur += 1

def eval_expr(expr):
    expr = expr.strip()
    # strip surrounding int(...) / (int)
    m = re.match(r'(?:int|u32|u16|u8|s32)\s*\((.+)\)$', expr)
    if m: expr = m.group(1).strip()
    if re.match(r'^0[xX][0-9a-fA-F]+$', expr):
        return int(expr, 16)
    if re.match(r'^-?\d+$', expr):
        return int(expr)
    # bit shift  1 << N  or  (1<<N)
    m = re.match(r'^\(?\s*(\d+)\s*<<\s*(\d+)\s*\)?$', expr)
    if m: return int(m.group(1)) << int(m.group(2))
    # reference to another enumerator
    if re.match(r'^[A-Za-z_]\w*$', expr):
        return symbol_val.get(expr)
    return None

def main():
    files = []
    for dp, _, fns in os.walk(ROOT):
        if '3rd party' in dp: continue
        for fn in fns:
            if fn.endswith(('.h', '.hpp', '.cpp')):
                files.append(os.path.join(dp, fn))
    # two passes so forward references across files resolve better
    for _ in range(2):
        for fp in files:
            try:
                t = open(fp, encoding='utf-8', errors='ignore').read()
            except Exception:
                continue
            if 'enum' not in t: continue
            t = re.sub(r'/\*.*?\*/', '', t, flags=re.S)
            t = re.sub(r'//[^\n]*', '', t)
            for m in enum_body_re.finditer(t):
                parse_enum(m.group(1))
    if wanted:
        for w in sys.argv[2:]:
            print(f"{w} = {symbol_val.get(w)}")
    else:
        for k in sorted(symbol_val):
            print(f"{k} = {symbol_val[k]}")

if __name__ == '__main__':
    main()
