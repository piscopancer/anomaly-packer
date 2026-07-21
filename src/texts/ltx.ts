import type { SymbolSeparatedString } from '@/types'
import { objectEntries } from '@/util'

export type LtxValue = string | number | boolean | null | undefined | readonly (string | number | boolean | null | undefined)[]

/**
 * The value you pass when authoring a field, given its read-schema type. A branded
 * {@link SymbolSeparatedString} field is written as its underlying array/tuple (e.g. a
 * `[str, op, val]` condition line), so the literal — not a joined string — is checked.
 * Everything else is written as declared.
 */
type LtxWritable<T> = T extends SymbolSeparatedString<infer V, string> ? V : T

/** A section's entries in write form. Field optionality (`?`, `| undefined`) is taken
 *  straight from the schema, so the declaration decides what may be omitted. */
type LtxEntries<Shape> = { [K in keyof Shape]: LtxWritable<Shape[K]> }

/**
 * Resolve the section-map to check against from the type argument `P`, which may be:
 *  - a registered {@link IniFileSchemas} path key — resolved like the read side ({@link IniExSchemaOf});
 *  - a section-map type directly (e.g. an addon's own `interface`), used as-is — so callers
 *    can bind by naming their schema instead of restating its file path;
 *  - anything else (or the default) — the loose untyped fallback.
 */
type LtxSchemaOf<P> = P extends keyof IniFileSchemas
  ? IniFileSchemas[P]
  : P extends object
    ? P
    : UntypedIniSchema

type Ltx<P, S extends keyof LtxSchemaOf<P>> = {
  section: S
  with?: string[]
  entries?: LtxEntries<LtxSchemaOf<P>[S]>
}

/**
 * Render a single ltx section to string. Bind it to a schema via the type argument to get
 * section-name autocomplete and per-field value checking — either a registered path key
 * (`ltx<'plugins\\my_addon.ltx'>({...})`) or a section-map type directly
 * (`ltx<MyAddonIni>({...})`). Called without the type argument, it falls back to the loose
 * untyped schema.
 * @param sort sort entries alphabetically (`true` by default)
 * @param align aligns table vertically, resuling in "=" signs appear under each other (`true` by default)
 * @returns ltx table as string
 */
export function ltx<P = string, S extends keyof LtxSchemaOf<P> = keyof LtxSchemaOf<P>>(ltx: Ltx<P, S>, sort = true, align = true): string {
  let output = ''
  output += '[' + ltx.section + ']'
  if (ltx.with && ltx.with.length) {
    output += ':' + ltx.with.join(', ')
  }
  if (!ltx.entries) return output
  output += '\n'
  const entries = objectEntries(ltx.entries)
  if (sort) {
    entries.sort(([k1], [k2]) => (k1 as string).localeCompare(k2 as string))
  }
  const [longestKey] = entries.toSorted(([k1], [k2]) => (k2 as string).length - (k1 as string).length)[0]
  for (const [k, v] of entries) {
    output += (align ? (k as string).padEnd((longestKey as string).length) : (k as string)) + ' = '
    if (Array.isArray(v)) {
      output += v.join(', ')
    } else if (v === null) {
      output += 'nil'
    } else {
      output += v
    }
    output += '\n'
  }
  return output
}

/**
 * An {@link ltx} pre-bound to a file path `P`, so the type argument is written once (via
 * {@link forFile}) instead of on every call. The binding is only a default: pass a type
 * argument to override the schema for a single call — `bound.ltx<'other.ltx'>({...})` —
 * and omit it to keep `P`.
 */
export type BoundLtx<P> = <P2 = P, S extends keyof LtxSchemaOf<P2> = keyof LtxSchemaOf<P2>>(
  ltx: Ltx<P2, S>,
  sort?: boolean,
  align?: boolean,
) => string

/**
 * Bind {@link ltx} to a schema once, dropping the per-call type argument: `const f =
 * t.forFile<MyAddonIni>()` (or a registered path key) then `f.ltx({ section, entries })`.
 * Purely additive — the standalone `t.ltx` (with or without its own type argument) still
 * works, so schema binding stays opt-in at every level.
 */
export function forFile<P>(): { ltx: BoundLtx<P> } {
  return { ltx: (arg, sort = true, align = true) => ltx(arg as never, sort, align) }
}

type SkipFirstSecond<Arr> = Arr extends [infer _1, infer _2, ...infer Rest] ? Rest : never

ltx.f = function <N extends keyof typeof xr_conditions | keyof typeof xr_effects>(
  name: N,
  ...args: SkipFirstSecond<Parameters<(typeof xr_conditions & typeof xr_effects)[N]>>
) {
  return name + (args.length ? '(' + args.join(':') + ')' : '')
}
