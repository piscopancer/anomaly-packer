// AUTO-GENERATED addon pack for `3dss-for-gamma` by `anomaly-packer gen-addon`. Config ltx schemas.
// Refine `TODO` (= any) by hand where the mod gave no type.
// `custom_icon_layers/layers/layer_3dssg.ltx` is never opened directly — `custom_icon_layers/layers/base_layers.ltx` globs it in, so these sections augment
// that file's schema. The interface is path-derived, so every mod contributing to it merges here.
import type { SlashSeparatedString } from 'anomaly-packer'
declare global {
  interface CustomIconLayersLayersBaseLayersIni {
    '3dssg_scopes_base': {
      anchor: string
      settings_group: SlashSeparatedString<string[]>
    }
    '3dssg_scopes_small_base': {
      anchor: string
      settings_group: SlashSeparatedString<string[]>
    }
    hv_layer: Omit<CustomIconLayersLayersBaseLayersIni['3dssg_scopes_small_base'], 'group' | 'texture'> & {
      group: string
      texture: string
    }
    nv_layer: Omit<CustomIconLayersLayersBaseLayersIni['3dssg_scopes_small_base'], 'group' | 'texture'> & {
      group: string
      texture: string
    }
    rds_layer: Omit<CustomIconLayersLayersBaseLayersIni['3dssg_scopes_small_base'], 'anchor' | 'group' | 'margin_vert' | 'texture'> & {
      anchor: string
      group: string
      margin_vert: number
      texture: string
    }
    kit_layer: Omit<CustomIconLayersLayersBaseLayersIni['3dssg_scopes_base'], 'anchor' | 'group' | 'margin_horz' | 'margin_vert' | 'texture'> & {
      anchor: string
      group: string
      margin_horz: number
      margin_vert: number
      texture: string
    }
    acog_layer: Omit<CustomIconLayersLayersBaseLayersIni['3dssg_scopes_base'], 'group' | 'texture'> & {
      group: string
      texture: string
    }
    triji_layer: Omit<CustomIconLayersLayersBaseLayersIni['3dssg_scopes_base'], 'group' | 'texture'> & {
      group: string
      texture: string
    }
    ac10632_layer: Omit<CustomIconLayersLayersBaseLayersIni['3dssg_scopes_base'], 'group' | 'texture'> & {
      group: string
      texture: string
    }
    acog2x_layer: Omit<CustomIconLayersLayersBaseLayersIni['3dssg_scopes_base'], 'group' | 'texture'> & {
      group: string
      texture: string
    }
    aim2k_layer: Omit<CustomIconLayersLayersBaseLayersIni['3dssg_scopes_base'], 'group' | 'texture'> & {
      group: string
      texture: string
    }
    aimlow_layer: Omit<CustomIconLayersLayersBaseLayersIni['3dssg_scopes_base'], 'group' | 'texture'> & {
      group: string
      texture: string
    }
    aimpoint_layer: Omit<CustomIconLayersLayersBaseLayersIni['3dssg_scopes_base'], 'group' | 'texture'> & {
      group: string
      texture: string
    }
    cmore_layer: Omit<CustomIconLayersLayersBaseLayersIni['3dssg_scopes_base'], 'group' | 'texture'> & {
      group: string
      texture: string
    }
    chs_layer: Omit<CustomIconLayersLayersBaseLayersIni['3dssg_scopes_base'], 'group' | 'texture'> & {
      group: string
      texture: string
    }
    compm4s_layer: Omit<CustomIconLayersLayersBaseLayersIni['3dssg_scopes_base'], 'group' | 'texture'> & {
      group: string
      texture: string
    }
    cortex_layer: Omit<CustomIconLayersLayersBaseLayersIni['3dssg_scopes_base'], 'group' | 'texture'> & {
      group: string
      texture: string
    }
    docter_layer: Omit<CustomIconLayersLayersBaseLayersIni['3dssg_scopes_base'], 'group' | 'texture'> & {
      group: string
      texture: string
    }
    dp_layer: Omit<CustomIconLayersLayersBaseLayersIni['3dssg_scopes_base'], 'group' | 'texture'> & {
      group: string
      texture: string
    }
    e0t2_layer: Omit<CustomIconLayersLayersBaseLayersIni['3dssg_scopes_base'], 'group' | 'texture'> & {
      group: string
      texture: string
    }
    ekp802_layer: Omit<CustomIconLayersLayersBaseLayersIni['3dssg_scopes_base'], 'group' | 'texture'> & {
      group: string
      texture: string
    }
    ekp818_layer: Omit<CustomIconLayersLayersBaseLayersIni['3dssg_scopes_base'], 'group' | 'texture'> & {
      group: string
      texture: string
    }
    eot_layer: Omit<CustomIconLayersLayersBaseLayersIni['3dssg_scopes_base'], 'group' | 'texture'> & {
      group: string
      texture: string
    }
    gauss_layer: Omit<CustomIconLayersLayersBaseLayersIni['3dssg_scopes_base'], 'group' | 'texture'> & {
      group: string
      texture: string
    }
    kobra_layer: Omit<CustomIconLayersLayersBaseLayersIni['3dssg_scopes_base'], 'group' | 'texture'> & {
      group: string
      texture: string
    }
    kp_layer: Omit<CustomIconLayersLayersBaseLayersIni['3dssg_scopes_base'], 'group' | 'texture'> & {
      group: string
      texture: string
    }
    kemper_layer: Omit<CustomIconLayersLayersBaseLayersIni['3dssg_scopes_base'], 'group' | 'texture'> & {
      group: string
      texture: string
    }
    leupold_layer: Omit<CustomIconLayersLayersBaseLayersIni['3dssg_scopes_base'], 'group' | 'texture'> & {
      group: string
      texture: string
    }
    mark8_layer: Omit<CustomIconLayersLayersBaseLayersIni['3dssg_scopes_base'], 'group' | 'texture'> & {
      group: string
      texture: string
    }
    marchf_layer: Omit<CustomIconLayersLayersBaseLayersIni['3dssg_scopes_base'], 'group' | 'texture'> & {
      group: string
      texture: string
    }
    mepro_layer: Omit<CustomIconLayersLayersBaseLayersIni['3dssg_scopes_base'], 'group' | 'texture'> & {
      group: string
      texture: string
    }
    okp_layer: Omit<CustomIconLayersLayersBaseLayersIni['3dssg_scopes_base'], 'group' | 'texture'> & {
      group: string
      texture: string
    }
    pgo7gs_layer: Omit<CustomIconLayersLayersBaseLayersIni['3dssg_scopes_base'], 'group' | 'texture'> & {
      group: string
      texture: string
    }
    pka_layer: Omit<CustomIconLayersLayersBaseLayersIni['3dssg_scopes_base'], 'group' | 'texture'> & {
      group: string
      texture: string
    }
    pn23_layer: Omit<CustomIconLayersLayersBaseLayersIni['3dssg_scopes_base'], 'group' | 'texture'> & {
      group: string
      texture: string
    }
    point_aimpro_layer: Omit<CustomIconLayersLayersBaseLayersIni['3dssg_scopes_base'], 'group' | 'texture'> & {
      group: string
      texture: string
    }
    ps01_layer: Omit<CustomIconLayersLayersBaseLayersIni['3dssg_scopes_base'], 'group' | 'texture'> & {
      group: string
      texture: string
    }
    pso1m21_layer: Omit<CustomIconLayersLayersBaseLayersIni['3dssg_scopes_base'], 'group' | 'texture'> & {
      group: string
      texture: string
    }
    pso2_layer: Omit<CustomIconLayersLayersBaseLayersIni['3dssg_scopes_base'], 'group' | 'texture'> & {
      group: string
      texture: string
    }
    pritseldob_layer: Omit<CustomIconLayersLayersBaseLayersIni['3dssg_scopes_base'], 'group' | 'texture'> & {
      group: string
      texture: string
    }
    rmr_layer: Omit<CustomIconLayersLayersBaseLayersIni['3dssg_scopes_base'], 'group' | 'texture'> & {
      group: string
      texture: string
    }
    rakurs_layer: Omit<CustomIconLayersLayersBaseLayersIni['3dssg_scopes_base'], 'group' | 'texture'> & {
      group: string
      texture: string
    }
    specter_layer: Omit<CustomIconLayersLayersBaseLayersIni['3dssg_scopes_base'], 'group' | 'texture'> & {
      group: string
      texture: string
    }
    specalt_layer: Omit<CustomIconLayersLayersBaseLayersIni['3dssg_scopes_base'], 'group' | 'texture'> & {
      group: string
      texture: string
    }
    susat_layer: Omit<CustomIconLayersLayersBaseLayersIni['3dssg_scopes_base'], 'group' | 'texture'> & {
      group: string
      texture: string
    }
    susatov_layer: Omit<CustomIconLayersLayersBaseLayersIni['3dssg_scopes_base'], 'group' | 'texture'> & {
      group: string
      texture: string
    }
    usp1_layer: Omit<CustomIconLayersLayersBaseLayersIni['3dssg_scopes_base'], 'group' | 'texture'> & {
      group: string
      texture: string
    }
    groza_layer: Omit<CustomIconLayersLayersBaseLayersIni['3dssg_scopes_base'], 'group' | 'texture'> & {
      group: string
      texture: string
    }
    pu_layer: Omit<CustomIconLayersLayersBaseLayersIni['3dssg_scopes_base'], 'group' | 'texture'> & {
      group: string
      texture: string
    }
    zf4_layer: Omit<CustomIconLayersLayersBaseLayersIni['3dssg_scopes_base'], 'group' | 'texture'> & {
      group: string
      texture: string
    }
    '0kp2_layer': Omit<CustomIconLayersLayersBaseLayersIni['3dssg_scopes_base'], 'group' | 'texture'> & {
      group: string
      texture: string
    }
    '1p29_layer': Omit<CustomIconLayersLayersBaseLayersIni['3dssg_scopes_base'], 'group' | 'texture'> & {
      group: string
      texture: string
    }
    '1p59_layer': Omit<CustomIconLayersLayersBaseLayersIni['3dssg_scopes_base'], 'group' | 'texture'> & {
      group: string
      texture: string
    }
    '1p76_layer': Omit<CustomIconLayersLayersBaseLayersIni['3dssg_scopes_base'], 'group' | 'texture'> & {
      group: string
      texture: string
    }
    '1p78gs_layer': Omit<CustomIconLayersLayersBaseLayersIni['3dssg_scopes_base'], 'group' | 'texture'> & {
      group: string
      texture: string
    }
    kashtan_layer: Omit<CustomIconLayersLayersBaseLayersIni['3dssg_scopes_base'], 'group' | 'texture'> & {
      group: string
      texture: string
    }
    '1pn93_layer': Omit<CustomIconLayersLayersBaseLayersIni['3dssg_scopes_base'], 'group' | 'texture'> & {
      group: string
      texture: string
    }
    '1pn931_layer': Omit<CustomIconLayersLayersBaseLayersIni['3dssg_scopes_base'], 'group' | 'texture'> & {
      group: string
      texture: string
    }
    '1p63_layer': Omit<CustomIconLayersLayersBaseLayersIni['3dssg_scopes_base'], 'group' | 'texture'> & {
      group: string
      texture: string
    }
    '1p87_layer': Omit<CustomIconLayersLayersBaseLayersIni['3dssg_scopes_base'], 'group' | 'texture'> & {
      group: string
      texture: string
    }
    bossxe_layer: Omit<CustomIconLayersLayersBaseLayersIni['3dssg_scopes_base'], 'group' | 'texture'> & {
      group: string
      texture: string
    }
    exps3_layer: Omit<CustomIconLayersLayersBaseLayersIni['3dssg_scopes_base'], 'group' | 'texture'> & {
      group: string
      texture: string
    }
    hco_layer: Omit<CustomIconLayersLayersBaseLayersIni['3dssg_scopes_base'], 'group' | 'texture'> & {
      group: string
      texture: string
    }
    he510_layer: Omit<CustomIconLayersLayersBaseLayersIni['3dssg_scopes_base'], 'group' | 'texture'> & {
      group: string
      texture: string
    }
    lco1_layer: Omit<CustomIconLayersLayersBaseLayersIni['3dssg_scopes_base'], 'group' | 'texture'> & {
      group: string
      texture: string
    }
    magnifier_layer: Omit<CustomIconLayersLayersBaseLayersIni['3dssg_scopes_base'], 'group' | 'texture'> & {
      group: string
      texture: string
    }
    p1x42_layer: Omit<CustomIconLayersLayersBaseLayersIni['3dssg_scopes_base'], 'group' | 'texture'> & {
      group: string
      texture: string
    }
    pk6_layer: Omit<CustomIconLayersLayersBaseLayersIni['3dssg_scopes_base'], 'group' | 'texture'> & {
      group: string
      texture: string
    }
    romeo4_layer: Omit<CustomIconLayersLayersBaseLayersIni['3dssg_scopes_base'], 'group' | 'texture'> & {
      group: string
      texture: string
    }
    romeo8_layer: Omit<CustomIconLayersLayersBaseLayersIni['3dssg_scopes_base'], 'group' | 'texture'> & {
      group: string
      texture: string
    }
    t12_layer: Omit<CustomIconLayersLayersBaseLayersIni['3dssg_scopes_base'], 'group' | 'texture'> & {
      group: string
      texture: string
    }
    uh2_layer: Omit<CustomIconLayersLayersBaseLayersIni['3dssg_scopes_base'], 'group' | 'texture'> & {
      group: string
      texture: string
    }
    ado_layer: Omit<CustomIconLayersLayersBaseLayersIni['3dssg_scopes_base'], 'group' | 'texture'> & {
      group: string
      texture: string
    }
    bravo4_layer: Omit<CustomIconLayersLayersBaseLayersIni['3dssg_scopes_base'], 'group' | 'texture'> & {
      group: string
      texture: string
    }
    c79_layer: Omit<CustomIconLayersLayersBaseLayersIni['3dssg_scopes_base'], 'group' | 'texture'> & {
      group: string
      texture: string
    }
    devo_layer: Omit<CustomIconLayersLayersBaseLayersIni['3dssg_scopes_base'], 'group' | 'texture'> & {
      group: string
      texture: string
    }
    e0t2_magd_layer: Omit<CustomIconLayersLayersBaseLayersIni['3dssg_scopes_base'], 'group' | 'texture'> & {
      group: string
      texture: string
    }
    e0t2_magd_off_layer: Omit<CustomIconLayersLayersBaseLayersIni['3dssg_scopes_base'], 'group' | 'texture'> & {
      group: string
      texture: string
    }
    echo1_layer: Omit<CustomIconLayersLayersBaseLayersIni['3dssg_scopes_base'], 'group' | 'texture'> & {
      group: string
      texture: string
    }
    gee36_layer: Omit<CustomIconLayersLayersBaseLayersIni['3dssg_scopes_base'], 'group' | 'texture'> & {
      group: string
      texture: string
    }
    hamr_layer: Omit<CustomIconLayersLayersBaseLayersIni['3dssg_scopes_base'], 'group' | 'texture'> & {
      group: string
      texture: string
    }
    march_f_shorty_layer: Omit<CustomIconLayersLayersBaseLayersIni['3dssg_scopes_base'], 'group' | 'texture'> & {
      group: string
      texture: string
    }
    march_f_shorty_alt_layer: Omit<CustomIconLayersLayersBaseLayersIni['3dssg_scopes_base'], 'group' | 'texture'> & {
      group: string
      texture: string
    }
    monstrum_layer: Omit<CustomIconLayersLayersBaseLayersIni['3dssg_scopes_base'], 'group' | 'texture'> & {
      group: string
      texture: string
    }
    p434_layer: Omit<CustomIconLayersLayersBaseLayersIni['3dssg_scopes_base'], 'group' | 'texture'> & {
      group: string
      texture: string
    }
    p4x32_layer: Omit<CustomIconLayersLayersBaseLayersIni['3dssg_scopes_base'], 'group' | 'texture'> & {
      group: string
      texture: string
    }
    ps320_layer: Omit<CustomIconLayersLayersBaseLayersIni['3dssg_scopes_base'], 'group' | 'texture'> & {
      group: string
      texture: string
    }
    razorhd_layer: Omit<CustomIconLayersLayersBaseLayersIni['3dssg_scopes_base'], 'group' | 'texture'> & {
      group: string
      texture: string
    }
    side_layer: Omit<CustomIconLayersLayersBaseLayersIni['3dssg_scopes_base'], 'group' | 'texture'> & {
      group: string
      texture: string
    }
    skeet_layer: Omit<CustomIconLayersLayersBaseLayersIni['3dssg_scopes_base'], 'group' | 'texture'> & {
      group: string
      texture: string
    }
    tac30_layer: Omit<CustomIconLayersLayersBaseLayersIni['3dssg_scopes_base'], 'group' | 'texture'> & {
      group: string
      texture: string
    }
    trihawk_layer: Omit<CustomIconLayersLayersBaseLayersIni['3dssg_scopes_base'], 'group' | 'texture'> & {
      group: string
      texture: string
    }
    uh1_magd_layer: Omit<CustomIconLayersLayersBaseLayersIni['3dssg_scopes_base'], 'group' | 'texture'> & {
      group: string
      texture: string
    }
    uh1_magd_off_layer: Omit<CustomIconLayersLayersBaseLayersIni['3dssg_scopes_base'], 'group' | 'texture'> & {
      group: string
      texture: string
    }
    vulcan_layer: Omit<CustomIconLayersLayersBaseLayersIni['3dssg_scopes_base'], 'group' | 'texture'> & {
      group: string
      texture: string
    }
    acro_layer: Omit<CustomIconLayersLayersBaseLayersIni['3dssg_scopes_base'], 'group' | 'texture'> & {
      group: string
      texture: string
    }
  }
}
