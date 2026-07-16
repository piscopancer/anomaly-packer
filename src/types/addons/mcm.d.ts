// WIP

// The full MCM feature, in one opt-in file. It is NOT part of any barrel — an addon
// that uses MCM pulls it in explicitly with:
//   /// <reference types="anomaly-packer/types/addons/mcm" />
// so `ui_mcm` / `McmConfig` don't pollute the global scope of addons that don't use MCM.
//
// This file provides two things:
//   1. The ambient globals `ui_mcm` (the runtime settings reader) and `McmConfig` (the
//      config-shape interface you augment).
//   2. The importable option-builder module `anomaly-packer/mcm` (track/check/…/menu),
//      whose runtime Anomaly Packer copies into the build the moment you import from it.
//
// Mcm config path includes your addon id and the key of the config itself, the path is slash-separated. Populate the McmConfig type with desired values.
// Declare your AddonId type for MCM in whatever place you like, type declarations are global anyways, the below is just an example.

interface McmConfig {}

// When the addon author leaves `McmConfig` empty, `keyof McmConfig` is `never` and
// `get` stays permissive: any `${AddonId}/...` path, `TODO` value. Once they add keys,
// the path is restricted to those keys and the return type is inferred per key.
declare const ui_mcm: {
  get: keyof McmConfig extends never
    ? (this: void, path: `${AddonId}/${string}`) => TODO
    : <Key extends keyof McmConfig>(this: void, path: `${AddonId}/${Key}`) => McmConfig[Key]
} | null

// Importable MCM option builder. The runtime lives in a support script that Anomaly
// Packer copies into the build (and links) the moment a script imports from here — no
// flag, no manual file. `@noResolution` keeps the import specifier verbatim so it can be
// linked to Anomaly's cross-script global.
/** @noResolution */
declare module 'anomaly-packer/mcm' {
  type McmAlign = 'l' | 'c' | 'r'

  // Every option carries an `id` plus optional `text` (the label i18n key) and `hint`
  // (the tooltip i18n key). MCM reads whichever the option kind supports.
  type McmOptionBase = { id: string; text?: string; hint?: string }

  export type McmTrackOption = McmOptionBase & { type: 'track'; val: 2; def: number; min: number; max: number; step: number }
  export type McmCheckOption = McmOptionBase & { type: 'check'; val: 1; def: boolean }
  /** A dropdown of `[value, label]` pairs; `def` is the selected value. */
  export type McmListOption = McmOptionBase & { type: 'list'; val: 0; def: string; content: [value: string, label: string][] }
  /** A read-only description line. */
  export type McmDescOption = McmOptionBase & { type: 'desc'; text: string }
  export type McmTitleOption = McmOptionBase & { type: 'title'; align?: McmAlign }
  export type McmSlideOption = McmOptionBase & { type: 'slide'; link: string; size?: [width: number, height: number]; spacing: number }
  export type McmLineOption = { type: 'line'; id?: string }

  /** A single leaf option (no children). */
  export type McmOption = McmTrackOption | McmCheckOption | McmListOption | McmDescOption | McmTitleOption | McmSlideOption | McmLineOption

  /** Deepest group (the second sidebar column): holds only leaf options. */
  export type McmLeafGroup = { id: string; sh?: boolean; gr: McmOption[] }
  /** First-column group: holds leaf options and/or one further level of leaf groups. */
  export type McmGroup = { id: string; sh?: boolean; gr: (McmOption | McmLeafGroup)[] }

  /**
   * The tree returned from `on_mcm_load`: the addon root. Its `gr` holds leaf options
   * and/or groups. MCM nests at most two group levels deep — `addon → group → group →
   * options` — and options may also appear directly under the addon or under a group.
   */
  export type McmOptionTree = {
    id: string
    sh: boolean
    gr: (McmOption | McmGroup)[]
  }

  /** A slider. Give `text` (label) and/or `hint` (tooltip). */
  export function track(this: void, props: { id: string; text?: string; hint?: string; def: number; min: number; max: number; step: number }): McmTrackOption
  /** A checkbox. Give `text` (label) and/or `hint` (tooltip). */
  export function check(this: void, props: { id: string; text?: string; hint?: string; def: boolean }): McmCheckOption
  /** A dropdown; `content` is a list of `[value, label]` pairs, `def` is the default value. */
  export function list(this: void, props: { id: string; text?: string; hint?: string; def: string; content: [value: string, label: string][] }): McmListOption
  /** A read-only description line. */
  export function desc(this: void, props: { id: string; text: string; hint?: string }): McmDescOption
  /** A section title. */
  export function title(this: void, props: { id: string; text: string; align?: McmAlign }): McmTitleOption
  /** A decorative image/slide. `size` is optional. */
  export function slide(this: void, props: { id: string; text: string; link: string; size?: [width: number, height: number]; spacing: number }): McmSlideOption
  /** A horizontal separator. */
  export const line: McmLineOption

  /**
   * A settings group — a collapsible section/column in the MCM sidebar. `sh` defaults to
   * `true`. Groups nest at most one level deep: a group whose `gr` is only leaf options is
   * a `McmLeafGroup` (usable inside another group), while a group that itself contains a
   * group is a `McmGroup` (only valid directly under the addon root). The overloads pick
   * the right type from what you pass, so exceeding `addon → group → group → options` is a
   * compile error.
   */
  export function group(this: void, props: { id: string; sh?: boolean; gr: McmOption[] }): McmLeafGroup
  export function group(this: void, props: { id: string; sh?: boolean; gr: (McmOption | McmLeafGroup)[] }): McmGroup

  /** Builds the addon root returned from `on_mcm_load`. `sh` defaults to `true`. */
  export function menu(this: void, props: { id: string; sh?: boolean; gr: (McmOption | McmGroup)[] }): McmOptionTree
}
