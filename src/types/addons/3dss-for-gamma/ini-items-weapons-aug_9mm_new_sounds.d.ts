// AUTO-GENERATED addon pack for `3dss-for-gamma` by `anomaly-packer gen-addon`. Config ltx schemas.
// Refine `TODO` (= any) by hand where the mod gave no type.
export {}

declare global {
  interface ItemsWeaponsAug9mmNewSoundsIni {
    wpn_aug_9mm_sounds: {
      snd_bore: string
      snd_draw: string
      snd_empty: string
      snd_holster: string
      snd_reload: string
      snd_reload_empty: string
      snd_reload_misfire: string
      snd_shoot: string
      snd_silncer_shot: string
    }
  }

  interface IniFileSchemas {
    'items\\weapons\\aug_9mm_new_sounds.ltx': ItemsWeaponsAug9mmNewSoundsIni
  }
}
