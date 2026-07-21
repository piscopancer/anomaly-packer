// AUTO-GENERATED addon pack for `3dss-for-gamma` by `anomaly-packer gen-addon`. Config ltx schemas.
// Refine `TODO` (= any) by hand where the mod gave no type.
import type { CommaSeparatedString } from 'anomaly-packer'
declare global {
  interface ModSystemZz3dssMosinIni {
    wpn_mosin_snd_silencer_shot: {
      snd_1_layer: string
      snd_1_layer1: string
      snd_1_layer2: string
      snd_1_layer3: string
      snd_2_layer: CommaSeparatedString<string[]>
      snd_2_layer1: CommaSeparatedString<string[]>
      snd_2_layer2: CommaSeparatedString<string[]>
      snd_2_layer3: CommaSeparatedString<string[]>
      snd_3_layer: string
      snd_4_layer: string
    }
    wpn_mosin_snd_silencer_shot_actor: {
      snd_1_layer: string
      snd_1_layer1: string
      snd_1_layer2: string
      snd_1_layer3: string
      snd_2_layer: string
      snd_2_layer1: string
      snd_2_layer2: string
      snd_2_layer3: string
      snd_3_layer: string
      snd_3_layer1: CommaSeparatedString<string[]>
      snd_3_layer2: CommaSeparatedString<string[]>
      snd_3_layer3: CommaSeparatedString<string[]>
      snd_4_layer: string
      snd_4_layer1: CommaSeparatedString<string[]>
      snd_4_layer2: CommaSeparatedString<string[]>
      snd_4_layer3: CommaSeparatedString<string[]>
      snd_5_layer: string
    }
  }

  interface IniFileSchemas {
    'mod_system_zz_3dss_mosin.ltx': ModSystemZz3dssMosinIni
  }
}
