// AUTO-GENERATED addon pack for `weapon_parts_overhaul` by `anomaly-packer gen-addon`. Config ltx schemas.
// Refine `TODO` (= any) by hand where the mod gave no type.
import type { Section } from 'anomaly-packer'

declare global {
  interface ItemsSettingsArtiUnjamSoundsIni {
    ak: Section.Item[]
    ar: Section.Item[]
    handgun: Section.Item[]
    shotgun: Section.Item[]
    bolt: Section.Item[]
  }

  interface IniFileSchemas {
    'items\\settings\\arti_unjam_sounds.ltx': ItemsSettingsArtiUnjamSoundsIni
  }
}
