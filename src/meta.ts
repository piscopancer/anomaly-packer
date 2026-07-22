import { stringify } from 'ini'

/**
 * Mod Organizer 2 stores a mod's metadata in a `meta.ini` under a `[General]` section. Without
 * one MO2 lists the mod as an unmanaged "backup" and nags on every refresh, so a deploy step
 * writes a minimal file. This builds that file's content.
 */

/**
 * Keys MO2 reads from `[General]`. All optional so a caller writes only what it knows; the
 * index signature keeps the door open for any other key MO2 understands (`comments`, `notes`,
 * `installationFile`, …) without widening the whole type to `Record<string, unknown>`.
 */
export type MetaIniGeneral = {
  modid?: number | string
  /** The mod's version shown in MO2's pane; conventionally read from `package.json`'s `version`. */
  version?: string
  category?: number | string
  /** The mod's web page, opened by MO2's "Visit website"; conventionally read from `package.json`'s `homepage`. */
  url?: string
} & Record<string, string | number | boolean | undefined>

/**
 * Fallbacks for the keys MO2 needs present for a mod to register at all. An author who only
 * cares about, say, `version` and `url` should not have to hand-write stub `modid`/`category`
 * lines, so these fill in unless overridden. `version` defaults to `1.0.0` rather than being
 * left blank, since an empty version reads as "unmanaged" in MO2's pane.
 */
const DEFAULTS = {
  modid: 0,
  version: '1.0.0',
  category: 0,
} satisfies MetaIniGeneral

/**
 * The `meta.ini` content for the given `[General]` fields, serialized by `ini` rather than by
 * hand so escaping and quoting match a real ini parser. MO2's required keys ({@link DEFAULTS})
 * are filled in when the caller omits them. Keys explicitly set to `undefined` are dropped, so
 * passing `{ modid: undefined }` opts out of that default rather than emitting a blank line.
 */
export function buildMetaIniContent(general: MetaIniGeneral = {}) {
  const merged: MetaIniGeneral = { ...DEFAULTS, ...general }
  const fields = Object.fromEntries(
    Object.entries(merged).filter(([, value]) => value !== undefined)
  )
  return stringify({ General: fields })
}
