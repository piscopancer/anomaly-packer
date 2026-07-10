// Importable MCM option builder. The runtime lives in a support script that Anomaly
// Packer copies into the build (and links) the moment a script imports from here — no
// flag, no manual file. Config-bound options (track, check) constrain `id` to
// `keyof McmConfig`, so a typo or unknown setting is a compile error once McmConfig is
// populated. `@noResolution` keeps the import specifier verbatim so it can be linked to
// Anomaly's cross-script global.

/** @noResolution */
declare module 'anomaly-packer/mcm' {
  type McmAlign = 'l' | 'c' | 'r'

  export type McmTrackOption = { type: 'track'; val: 2; id: keyof McmConfig; text: string; def: number; min: number; max: number; step: number }
  export type McmCheckOption = { type: 'check'; val: 1; id: keyof McmConfig; text: string; def: boolean }
  export type McmTitleOption = { type: 'title'; id: string; text: string; align?: McmAlign }
  export type McmSlideOption = { type: 'slide'; id: string; text: string; link: string; size: [width: number, height: number]; spacing: number }
  export type McmLineOption = { type: 'line' }

  /** A single entry of an MCM options group. */
  export type McmOption = McmTrackOption | McmCheckOption | McmTitleOption | McmSlideOption | McmLineOption

  /** The tree returned from `on_mcm_load`: a group `gr` of options under an addon `id`. */
  export type McmOptionTree = {
    id: string
    sh: boolean
    gr: McmOption[]
  }

  /** A slider bound to a numeric config key. */
  export function track(this: void, props: { id: keyof McmConfig; text: string; def: number; min: number; max: number; step: number }): McmTrackOption
  /** A checkbox bound to a boolean config key. */
  export function check(this: void, props: { id: keyof McmConfig; text: string; def: boolean }): McmCheckOption
  /** A section title. */
  export function title(this: void, props: { id: string; text: string; align?: McmAlign }): McmTitleOption
  /** A decorative image/slide. */
  export function slide(this: void, props: { id: string; text: string; link: string; size: [width: number, height: number]; spacing: number }): McmSlideOption
  /** A horizontal separator. */
  export const line: McmLineOption
}
