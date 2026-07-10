/** Localization folders Anomaly reads under gamedata/configs/text. The list is open-ended — unknown folder names are still accepted, the known ones just provide autocomplete. */
export type Language = 'eng' | 'rus' | 'ukr' | 'pol' | 'fra' | 'ger' | 'spa' | 'ita' | 'cze' | (string & {})

/** Every localization declares exactly the same keys: `eng` is the source of truth (its keys and values are inferred), and every other language you provide is forced to mirror its key set exactly — a missing or stray translation is a compile error. The languages you pass stay present on the result (no spurious `undefined`). */
export function bilingual<const D extends { eng: Record<string, string> }>(dict: D & Partial<Record<Exclude<Language, 'eng'>, Record<keyof D['eng'], string>>>): D {
  return dict
}

/** In-game text color codes accepted by `%c[...]` (news, dialogs, UI strings). Mirrors the engine's color names. */
export type Color =
  | 'default'
  | 'red'
  | 'orange'
  | 'yellow'
  | 'green'
  | 'blue'
  | 'white'
  | 'black'
  | 'gray'
  | 'light_gray'
  | 'tut_gray'
  | 'dark_gray'
  | 'edit'
  | `d_${'orange' | 'red' | 'cyan' | 'red_1' | 'purple' | 'green' | 'blue'}`
  | `ui_${'red' | 'green' | 'blue' | 'white' | 'black' | 'gray' | 'yellow' | 'gray_1' | 'gray_2' | 'gray_3' | 'lime'}`
  | `ui_${1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10}`
  | `pda_${'green' | 'blue' | 'yellow' | 'white' | 'red'}`

/** Wraps a color name in the game's inline color code, e.g. `color('d_cyan')` → `%c[d_cyan]`. Everything after it is painted until the next code. */
export function color(name: Color) {
  return `%c[${name}]`
}
