#!/usr/bin/env python3
"""Scan an X-Ray Monolith engine repo for luabind registrations.

Extracts, per registered class: luabind name, C++ type, base class(es),
constructors (with C++ arg types), methods, def_readwrite/def_readonly fields,
properties (with read/write info) and enum members (symbolic value expr).

Output: JSON to stdout. Method ARGUMENT TYPES are not in the .cpp (they live in
headers) so they are intentionally absent here.
"""
import os, re, sys, json

ROOT = sys.argv[1] if len(sys.argv) > 1 else "."

def strip_comments(text):
    # remove /* */ then // line comments, but keep string literals intact enough
    text = re.sub(r'/\*.*?\*/', '', text, flags=re.S)
    out = []
    for line in text.splitlines():
        # naive: cut // not inside a string. Good enough for these files.
        in_str = False
        esc = False
        res = ''
        i = 0
        while i < len(line):
            c = line[i]
            if in_str:
                res += c
                if esc:
                    esc = False
                elif c == '\\':
                    esc = True
                elif c == '"':
                    in_str = False
            else:
                if c == '"':
                    in_str = True
                    res += c
                elif c == '/' and i + 1 < len(line) and line[i+1] == '/':
                    break
                else:
                    res += c
            i += 1
        out.append(res)
    return '\n'.join(out)

def split_template(s):
    """Split top-level commas of a template arg list."""
    parts, depth, cur = [], 0, ''
    for ch in s:
        if ch in '<([':
            depth += 1; cur += ch
        elif ch in '>)]':
            depth -= 1; cur += ch
        elif ch == ',' and depth == 0:
            parts.append(cur.strip()); cur = ''
        else:
            cur += ch
    if cur.strip():
        parts.append(cur.strip())
    return parts

# match class_< ... >("name")  with balanced angle brackets
CLASS_RE = re.compile(r'class_\s*<')

def find_classes(text):
    results = []
    for m in CLASS_RE.finditer(text):
        i = m.end()
        depth = 1
        j = i
        while j < len(text) and depth > 0:
            if text[j] == '<': depth += 1
            elif text[j] == '>': depth -= 1
            j += 1
        template_args = text[i:j-1]
        # now expect ("name")
        rest = text[j:]
        nm = re.match(r'\s*\(\s*"([^"]+)"\s*\)', rest)
        if not nm:
            continue
        name = nm.group(1)
        chain_start = j + nm.end()
        # chain ends at the next top-level ',' or ']' that closes the module list.
        # We approximate: capture until the matching close of the module by scanning
        # bracket depth starting after the class name; stop at a ',' with depth 0
        # (relative) that is followed by whitespace+class_< or at ']' closing.
        depth = 0
        k = chain_start
        while k < len(text):
            ch = text[k]
            if ch in '([{':
                depth += 1
            elif ch in ')]}':
                if depth == 0:
                    break  # closing of module list
                depth -= 1
            elif ch == ',' and depth == 0:
                break
            k += 1
        chain = text[chain_start:k]
        targs = split_template(template_args)
        cpptype = targs[0] if targs else ''
        bases = []
        for t in targs[1:]:
            tb = re.match(r'bases\s*<(.+)>', t)
            if tb:
                bases.extend(split_template(tb.group(1)))
            else:
                bases.append(t)
        results.append({'name': name, 'cpptype': cpptype, 'bases': bases,
                        'chain': chain})
    return results

def parse_chain(chain):
    methods, constructors = [], []
    readwrite, readonly, properties = [], [], []
    enums = {}
    # constructors
    for m in re.finditer(r'constructor\s*<([^>]*)>', chain):
        args = split_template(m.group(1))
        constructors.append(args)
    # def("name", ...)
    for m in re.finditer(r'\.def\s*\(\s*"([^"]+)"', chain):
        methods.append(m.group(1))
    for m in re.finditer(r'\.def_readwrite\s*\(\s*"([^"]+)"', chain):
        readwrite.append(m.group(1))
    for m in re.finditer(r'\.def_readonly\s*\(\s*"([^"]+)"', chain):
        readonly.append(m.group(1))
    # property("name", &getter [, &setter])
    for m in re.finditer(r'\.property\s*\(\s*"([^"]+)"([^;]*?)\)(?=\s*\.|\s*\]|\s*,|\s*$)', chain):
        pname = m.group(1)
        tail = m.group(2)
        commas = split_template(tail.lstrip(','))
        writable = len([c for c in commas if c.strip()]) >= 2
        properties.append({'name': pname, 'writable': writable})
    # enums: .enum_("ename")[ value("k", EXPR), ... ]
    for m in re.finditer(r'\.enum_\s*\(\s*"([^"]+)"\s*\)\s*\[(.*?)\]', chain, re.S):
        ename = m.group(1)
        body = m.group(2)
        vals = []
        for vm in re.finditer(r'value\s*\(\s*"([^"]+)"\s*,(.*?)\)(?=\s*,|\s*$|\s*value)', body, re.S):
            vals.append({'key': vm.group(1), 'expr': vm.group(2).strip()})
        enums[ename] = vals
    # dedupe methods preserving order
    seen = set(); um = []
    for x in methods:
        if x not in seen:
            seen.add(x); um.append(x)
    return {'constructors': constructors, 'methods': um,
            'readwrite': readwrite, 'readonly': readonly,
            'properties': properties, 'enums': enums}

def main():
    all_classes = {}
    for dirpath, _, files in os.walk(ROOT):
        if '3rd party' in dirpath or '3rd_party' in dirpath:
            continue
        for fn in files:
            if not fn.endswith('.cpp'):
                continue
            fp = os.path.join(dirpath, fn)
            try:
                with open(fp, 'r', encoding='utf-8', errors='ignore') as f:
                    text = f.read()
            except Exception:
                continue
            if 'class_' not in text:
                continue
            text = strip_comments(text)
            for c in find_classes(text):
                parsed = parse_chain(c['chain'])
                entry = {
                    'name': c['name'], 'cpptype': c['cpptype'],
                    'bases': c['bases'],
                    'file': os.path.relpath(fp, ROOT).replace('\\', '/'),
                    **parsed
                }
                # merge if a class name appears in multiple files
                if c['name'] in all_classes:
                    prev = all_classes[c['name']]
                    for key in ('methods', 'readwrite', 'readonly'):
                        for v in entry[key]:
                            if v not in prev[key]:
                                prev[key].append(v)
                    prev['constructors'].extend(entry['constructors'])
                    for pn in entry['properties']:
                        if pn not in prev['properties']:
                            prev['properties'].append(pn)
                    prev['enums'].update(entry['enums'])
                    if not prev['bases'] and entry['bases']:
                        prev['bases'] = entry['bases']
                else:
                    all_classes[c['name']] = entry
    print(json.dumps(all_classes, indent=1, ensure_ascii=False))

if __name__ == '__main__':
    main()
