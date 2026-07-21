// AUTO-GENERATED addon pack for `sorting-plus` by `anomaly-packer gen-addon`. Config ltx schemas.
// Refine `TODO` (= any) by hand where the mod gave no type.
import type { CommaSeparatedString } from 'anomaly-packer'

declare global {
  interface SortingplusIni {
    item_kind_order: {
      faction_patch: number
      favorites: number
      i_arty: number
      i_arty_cont: number
      i_arty_junk: number
      i_backpack: number
      i_device: number
      i_drink: number
      i_food: number
      i_kit: number
      i_letter: number
      i_medical: number
      i_misc: number
      i_mutant_belt: number
      i_mutant_cooked: number
      i_mutant_part: number
      i_mutant_raw: number
      i_part: number
      i_quest: number
      i_repair: number
      i_tool: number
      i_upgrade: number
      junk: number
      loadout: number
      mags: number
      o_heavy: number
      o_helmet: number
      o_light: number
      o_medium: number
      o_sci: number
      w_ammo: number
      w_base: number
      w_explosive: number
      w_melee: number
      w_misc: number
      w_pistol: number
      w_rifle: number
      w_shotgun: number
      w_smg: number
      w_sniper: number
    }
    kind_overrides: {
      af_misery_bread: string
      army_patch: string
      attackers_pda: string
      bad_psy_helmet: string
      bandit_patch: string
      contact_lost_pda: string
      csky_patch: string
      decoder: string
      dolg_patch: string
      ecolog_patch: string
      freedom_patch: string
      good_psy_helmet: string
      greh_patch: string
      hand_watch: string
      isg_patch: string
      killer_patch: string
      lead_box: string
      monolith_patch: string
      renegade_patch: string
      stalker_patch: string
      wpn_binoc_inv: string
    }
    sortingplusmcm: {
      '000favorites': CommaSeparatedString<string[]>
      '001loadout': CommaSeparatedString<string[]>
      '002mags': CommaSeparatedString<string[]>
      '010weapons': CommaSeparatedString<string[]>
      '020outfits': CommaSeparatedString<string[]>
      '030artifacts': CommaSeparatedString<string[]>
      '040devices': CommaSeparatedString<string[]>
      '050tools': CommaSeparatedString<string[]>
      '060medical': CommaSeparatedString<string[]>
      '070foods': CommaSeparatedString<string[]>
      '080mutantfoods': CommaSeparatedString<string[]>
      '090quest': CommaSeparatedString<string[]>
      '100notes': CommaSeparatedString<string[]>
      '110ammo': CommaSeparatedString<string[]>
      '120mutantparts': CommaSeparatedString<string[]>
      '130misc': CommaSeparatedString<string[]>
      '140upgrades': CommaSeparatedString<string[]>
      '150parts': CommaSeparatedString<string[]>
      '999junk': CommaSeparatedString<string[]>
    }
  }

  interface IniFileSchemas {
    'sortingplus.ltx': SortingplusIni
  }
}
