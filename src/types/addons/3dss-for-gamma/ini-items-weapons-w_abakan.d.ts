// AUTO-GENERATED addon pack for `3dss-for-gamma` by `anomaly-packer gen-addon`. Config ltx schemas.
// Refine `TODO` (= any) by hand where the mod gave no type.
// `items/weapons/w_abakan.ltx` is never opened directly — `items/weapons/base.ltx` globs it in, so these sections augment
// that file's schema. The interface is path-derived, so every mod contributing to it merges here.
export {}

declare global {
  interface ItemsWeaponsBaseIni {
    wpn_abakan: {
      hud: string
      parent_section: string
    }
    wpn_abakan_kobra: Omit<ItemsWeaponsBaseIni['wpn_abakan'], 'hud' | 'parent_section'> & {
      hud: string
      parent_section: string
    }
    wpn_abakan_1p76: {
      hud: string
      parent_section: string
    }
    wpn_abakan_ekp8_02: {
      hud: string
      parent_section: string
    }
    wpn_abakan_okp: {
      hud: string
      parent_section: string
    }
    wpn_abakan_pka: {
      hud: string
      parent_section: string
    }
    wpn_abakan_1p63: {
      hud: string
      parent_section: string
    }
    wpn_abakan_usp1: {
      hud: string
      parent_section: string
    }
    wpn_abakan_1p29: {
      hud: string
      parent_section: string
    }
    wpn_abakan_pso2: {
      hud: string
      parent_section: string
    }
    wpn_abakan_1p78gs: {
      hud: string
      parent_section: string
    }
    wpn_abakan_1pn93n2_1gs: {
      hud: string
      parent_section: string
    }
    wpn_abakan_1pn93: {
      hud: string
      parent_section: string
    }
    wpn_abakan_1p59: {
      hud: string
      parent_section: string
    }
    wpn_abakan_pso1m21: {
      hud: string
      parent_section: string
    }
  }
}
