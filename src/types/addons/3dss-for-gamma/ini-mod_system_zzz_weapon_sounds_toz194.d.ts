// AUTO-GENERATED addon pack for `3dss-for-gamma` by `anomaly-packer gen-addon`. Config ltx schemas.
// Refine `TODO` (= any) by hand where the mod gave no type.
export {}

declare global {
  interface ModSystemZzzWeaponSoundsToz194Ini {
    wpn_fort500_n_snd_shoot: {
      snd_1_layer: string
      snd_2_layer: string
      snd_3_layer: string
      snd_4_layer: string
    }
    wpn_fort500_snd_silencer_shoot: {
      snd_1_layer: string
      snd_2_layer: string
    }
    wpn_fort500_sounds_n: {
      scripted_snd_ammo_check: string
      scripted_snd_ammo_check_empty: string
      scripted_snd_bore: string
      scripted_snd_bore_empty: string
      scripted_snd_open: string
      scripted_snd_open_empty: string
      snd_add_cartridge: string
      snd_add_cartridge1: string
      snd_add_cartridge2: string
      snd_add_cartridge3: string
      snd_bore: string
      snd_close_weapon: string
      snd_draw: string
      snd_holster: string
      snd_open_weapon: string
      snd_reload_misfire: string
      snd_shoot: string
      snd_silncer_shot: string
    }
  }

  interface IniFileSchemas {
    'mod_system_zzz_weapon_sounds_toz194.ltx': ModSystemZzzWeaponSoundsToz194Ini
  }
}
