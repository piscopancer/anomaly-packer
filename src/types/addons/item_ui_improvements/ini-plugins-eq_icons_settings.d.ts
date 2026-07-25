// AUTO-GENERATED addon pack for `item_ui_improvements` by `anomaly-packer gen-addon`. Config ltx schemas.
// Refine `TODO` (= any) by hand where the mod gave no type.
import type { CommaSeparatedString } from 'anomaly-packer'

declare global {
  interface PluginsEqIconsSettingsIni {
    comm_to_texture: {
      army: CommaSeparatedString<string[]>
      bandit: CommaSeparatedString<string[]>
      csky: CommaSeparatedString<string[]>
      dolg: CommaSeparatedString<string[]>
      ecolog: CommaSeparatedString<string[]>
      freedom: CommaSeparatedString<string[]>
      greh: CommaSeparatedString<string[]>
      isg: CommaSeparatedString<string[]>
      killer: CommaSeparatedString<string[]>
      monolith: CommaSeparatedString<string[]>
      renegade: CommaSeparatedString<string[]>
      stalker: CommaSeparatedString<string[]>
    }
    repair_to_texture: {
      '[section_to_texture]': string
      helm_ach7: CommaSeparatedString<string[]>
      helm_ach7ex: CommaSeparatedString<string[]>
      helm_battle: CommaSeparatedString<string[]>
      helm_exo: CommaSeparatedString<string[]>
      helm_hardhat: CommaSeparatedString<string[]>
      helm_hardhat_snag: CommaSeparatedString<string[]>
      helm_m40: CommaSeparatedString<string[]>
      helm_m50: CommaSeparatedString<string[]>
      helm_metro: CommaSeparatedString<string[]>
      helm_ppm88: CommaSeparatedString<string[]>
      helm_protective: CommaSeparatedString<string[]>
      helm_ranger: CommaSeparatedString<string[]>
      helm_spartan: CommaSeparatedString<string[]>
      helm_tactic: CommaSeparatedString<string[]>
      helmet_exo: CommaSeparatedString<string[]>
      helmet_heavy: CommaSeparatedString<string[]>
      helmet_light: CommaSeparatedString<string[]>
      helmet_medium: CommaSeparatedString<string[]>
      outfit_exo: CommaSeparatedString<string[]>
      outfit_heavy: CommaSeparatedString<string[]>
      outfit_light: CommaSeparatedString<string[]>
      outfit_medium: CommaSeparatedString<string[]>
      outfit_novice: CommaSeparatedString<string[]>
    }
    gun_repair_to_texture: {
      pistol: CommaSeparatedString<string[]>
      rifle_5: CommaSeparatedString<string[]>
      rifle_7: CommaSeparatedString<string[]>
      shotgun: CommaSeparatedString<string[]>
    }
    positioning: {
      seperator: number
      x_offset: number
      y_offset: number
    }
  }

  interface IniFileSchemas {
    'plugins\\eq_icons_settings.ltx': PluginsEqIconsSettingsIni
  }
}
