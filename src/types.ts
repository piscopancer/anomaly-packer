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
type InventoryItem = Partial<{
  inv_name: string
  inv_name_short: string
  inv_weight: number
  inv_grid_width: number
  inv_grid_height: number
  inv_grid_x: number
  inv_grid_y: number
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
  // II_FOOD
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
        sim_communities: Faction | Faction[]
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
