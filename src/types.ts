import * as texts from './texts'
export type Texts = typeof texts

/**
 * - `%=func%` return the function's returned value
 * - `{=func}` check the function's returned value
 * - `{-info}` check actor does not have info portion
 * - `{+info}` check actor has info portion
 */
type CondList = string
type ItemActionIndex = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10
type ItemActionMode = 'inventory' | 'loot' | 'trade' | 'repair'
type ItemActionContainer = 'actor_bag' | 'actor_equ' | 'actor_belt' | 'actor_trade' | 'actor_trade_bag' | 'npc_bag' | 'npc_trade' | 'npc_trade_bag'
type vector = [x: number, y: number, z: number]
type OtherSomethingItem = Partial<{
  GroupControlSection: string
  class: string
  script_binding: Suggest<'bind_item.bind'>
  discovery_dependency: string
  $spawn: string
  $prefetch: number
  scheduled: Suggest<'off'>
  cform: string
  visual: string
  disassemble_parts: string | string[]
  cost: number
  tier: number
  snd_on_take: Suggest<'other'>
  belt: boolean
  radius: number
  ph_mass: number
  kill_msg_x: number // wpn ammo
  kill_msg_y: number // wpn ammo
  kill_msg_width: number // wpn ammo
  kill_msg_height: number // wpn ammo
  light_disabled: boolean // wpn ammo
  light_color: vector // wpn ammo
  light_range: number // wpn ammo
  light_time: number // wpn ammo
  light_var_color: number // wpn ammo
  light_var_range: number // wpn ammo
}>
type InventoryItem = Partial<{
  inv_name: string
  inv_name_short: string
  inv_weight: number
  inv_grid_width: number
  inv_grid_height: number
  inv_grid_x: number
  inv_grid_y: number
}>
type Weapon = OtherSomethingItem &
  InventoryItem &
  Partial<{
    ef_weapon_type: number
    animation_slot: number
    hand_dependence: number
    single_handed: number
    position: vector
    orientation: vector
    fire_point: vector
    fire_point2: vector
    strap_bone0: string
    strap_bone1: string
    strap_position: vector
    strap_orientation: vector
    flame_particles: string
    flame_particles_2: string
    smoke_particles: string
    shell_point: vector
    shell_dir: vector
    shell_particles: string
    // ammo
    fire_modes: number
    ammo_class: string | string[]
    ammo_current: number
    ammo_elapsed: number
    ammo_limit: number
    ammo_mag_size: number
    startup_ammo: number
    // scope
    scope_status: number
    scope_dynamic_zoom: boolean
    scope_name: string
    scope_texture: string
    scope_x: number
    scope_y: number
    scope_zoom_factor: number
    // silencer
    silencer_status: number
    silencer_light_color: vector
    silencer_light_range: number
    silencer_light_time: number
    silencer_light_var_color: number
    silencer_light_var_range: number
    silencer_smoke_particles: string
    // grenade launcher
    grenade_launcher_status: number
    // firing
    hit_impulse: number
    hit_power: [number, number, number, number]
    hit_type: Suggest<'fire_wound'>
    fire_distance: number
    bullet_speed: number
    rpm: number
    rpm_empty_click: number
    //
    use_aim_bullet: boolean
    time_to_aim: number
    zoom_dof: vector
    zoom_enabled: boolean
    zoom_rotate_time: number
    reload_dof: [number, number, number, number]
    control_inertion_factor: number
    crosshair_inertion: number
    fire_dispersion_base: number
    fire_dispersion_condition_factor: number
    //
    misfire_probability: number
    misfire_start_condition: number
    misfire_start_prob: number
    misfire_end_condition: number
    misfire_end_prob: number
    //
    condition_queue_shot_dec: number
    condition_shot_dec: number
    //
    cam_return: number
    cam_relax_speed: number
    cam_dispersion: number
    cam_dispersion_frac: number
    cam_dispersion_inc: number
    cam_max_angle: number
    cam_max_angle_horz: number
    cam_step_angle_horz: number
    zoom_cam_dispersion: number
    //
    PDM_disp_accel_factor: number
    PDM_disp_base: number
    PDM_disp_crouch: number
    PDM_disp_crouch_no_acc: number
    PDM_disp_vel_factor: number
    //
    cam_relax_speed_ai: number
    holder_fov_modifier: number
    holder_range_modifier: number
    min_radius: number
    max_radius: number
    hit_probability_gd_novice: number
    hit_probability_gd_stalker: number
    hit_probability_gd_veteran: number
    hit_probability_gd_master: number
    //
    kill_msg_x: number
    kill_msg_y: number
    kill_msg_width: number
    kill_msg_height: number
    weapon_lower_speed: number
    // probably also armor
    upgrades: string | string[]
    installed_upgrades: string | string[]
    upgrade_scheme: string
    upgr_icon_x: number
    upgr_icon_y: number
    upgr_icon_width: number
    upgr_icon_height: number
    //
  }>
type BaseAmmo = Partial<{
  explosive: boolean
  '4to1_tracer': boolean
  tracer_color_id: number
  box_size: number
  buck_shot: number
  impair: number
  wm_size: number
  fake_ammo: boolean
  k_dist: number
  k_disp: number
  k_hit: number
  k_impulse: number
  k_pierce: number
  k_ap: number
  k_air_resistance: number
  k_bullet_speed: number
  fake_grenade_name: Suggest<'wpn_fake_missile'>
  grenade_ammo: boolean
  wallmark_section: Suggest<'explosion_marks'>
}>
type Usable = Partial<{
  use_condition: boolean
  max_uses: number
  remove_after_use: boolean
  allow_repair: boolean
  dont_stack: boolean
  condition_bar: Suggest<'uses_progess_bar'>
  empty_weight: number
}>
type Food = Partial<{
  eat_health: number
  eat_satiety: number
  eat_power: number
  eat_max_power: number
  eat_radiation: number
  eat_alcohol: number
  wounds_heal_perc: number
}>
type ArtefactBaseAbsorbation = Partial<{
  burn_immunity: number
  strike_immunity: number
  shock_immunity: number
  wound_immunity: number
  radiation_immunity: number
  telepatic_immunity: number
  chemical_burn_immunity: number
  explosion_immunity: number
  fire_wound_immunity: number
}>
type Artefact = InventoryItem &
  OtherSomethingItem &
  Partial<{
    hud: string
    animation_slot: number
    allow_inertion: boolean
    attach_angle_offset: vector
    attach_position_offset: vector
    attach_bone_name: string
    af_actor_properties: boolean
    actor_properties: boolean
    det_show_particles: string
    det_hide_particles: string
    det_show_snd: string
    det_hide_snd: string
    af_rank: number
    can_be_controlled: boolean
    particles_bone: Suggest<'link'>
    degrade_rate: number
    idle_light_shadow: boolean
    health_restore_speed: number
    radiation_restore_speed: number
    satiety_restore_speed: number
    power_restore_speed: number
    bleeding_restore_speed: number
    hit_absorbation_sect: string
    strike_impulse: number
  }>
type Booster = Partial<{
  boost_health_restore: number
  boost_power_restore: number
  boost_radiation_restore: number
  boost_bleeding_restore: number
  boost_max_weight: number
  boost_radiation_protection: number
  boost_telepat_protection: number
  boost_chemburn_protection: number
  boost_burn_immunity: number
  boost_shock_immunity: number
  boost_radiation_immunity: number
  boost_telepat_immunity: number
  boost_chemburn_immunity: number
  boost_explosion_immunity: number
  boost_strike_immunity: number
  boost_fire_wound_immunity: number
  boost_wound_immunity: number
}>

export namespace Ltx {
  /** Interactivity with an item via interface */
  export interface GlobalItemActions
    extends Partial<
      Record<`use${ItemActionIndex}_${'functor' | 'action_functor'}`, string> &
        Record<`use${ItemActionIndex}_modes`, ItemActionMode | ItemActionMode[]> &
        Record<`use${ItemActionIndex}_containers`, ItemActionContainer | ItemActionContainer[]>
    > {}
  export interface IdentityImmunities
    extends GlobalItemActions,
      Partial<{
        immunities_sect: string
        slot: number
        description: string
        default_to_ruck: boolean
        sprint_allowed: boolean
        control_inertion_factor: number
        zoom_rotate_time: number
        can_trade: boolean
        quest_item: boolean
        condition_bar: string
        snd_on_take: string
      }> {}
  export interface DefaultWeaponParams
    extends IdentityImmunities,
      Partial<{
        use_aim_bullet: boolean
        use_first_bullet: boolean
        k_hit_critical: number
        frag_hit_critical: number
        hit_power: number
        hit_power_critical: number
        silencer_hit_power: number
        hit_impulse: number
        silencer_hit_impulse: number
        kind: string
        can_be_lowered: string
        weapon_lower_speed: boolean
      }> {}
  export interface Trader
    extends Partial<{
      buy_condition: Suggest<'trade_generic_buy'>
      buy_item_condition_factor: number
      buy_item_exponent: number
      buy_supplies: CondList
      sell_item_exponent: number
      sell_condition: Suggest<'trade_generic_sell'>
      price_profile: Suggest<'default'>
      discounts: string
    }> {}
  export interface Task
    extends Partial<
      {
        icon: string
        prior: number
        sim_communities: Community | Community[]
        storyline: boolean
        title: string
        title_functor: CondList
        descr: string
        job_descr: string
        fetch_descr: string
        descr_functor: string
        target_functor: string
        task_complete_descr: string
        fetch_func: CondList
        status_functor: string
        status_functor_params: string[]
        precondition: CondList
        repeat_timeout: number
        stage_complete: number
        on_job_descr: string
        on_init: CondList
        on_complete: CondList
        on_fail: CondList
      } & Record<`condlist_${number}`, CondList>
    > {}
}
