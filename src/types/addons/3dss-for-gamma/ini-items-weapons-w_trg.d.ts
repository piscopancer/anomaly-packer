// AUTO-GENERATED addon pack for `3dss-for-gamma` by `anomaly-packer gen-addon`. Config ltx schemas.
// Refine `TODO` (= any) by hand where the mod gave no type.
// `items/weapons/w_trg.ltx` is never opened directly — `items/weapons/base.ltx` globs it in, so these sections augment
// that file's schema. The interface is path-derived, so every mod contributing to it merges here.
export {}

declare global {
  interface ItemsWeaponsBaseIni {
    wpn_trg_mmg_snd_shoot: {
      snd_1_layer: string
      snd_2_layer: string
    }
    wpn_trg_mmg_silncer_snd_shoot: {
      snd_1_layer: string
      snd_2_layer: string
    }
    wpn_trg_kntl_sounds: {
      snd_draw: string
      snd_holster: string
      snd_reload: string
      snd_reload_empty: string
      snd_reload_misfire: string
      snd_shoot: string
      snd_silncer_shot: string
    }
    wpn_trg: {
      parent_section: string
    }
  }
}
