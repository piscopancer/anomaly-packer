// AUTO-GENERATED addon pack for `3dss-for-gamma` by `anomaly-packer gen-addon`. Config ltx schemas.
// Refine `TODO` (= any) by hand where the mod gave no type.
import type { Section } from 'anomaly-packer'

declare global {
  interface UnlocalizersUnlocalizerWctIni {
    weapon_cover_tilt: Section.Item[]
  }

  interface IniFileSchemas {
    'unlocalizers\\unlocalizer_wct.ltx': UnlocalizersUnlocalizerWctIni
  }
}
