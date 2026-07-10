// @generated skeleton — auto-produced from Lua scripts, refine by hand

/** @noSelfInFile */

declare namespace item_device {
  export const dev_consumption: TODO
  export const dev_consumption_act: TODO
  export const dev_consumption_tot: TODO
  export const dev_critical: TODO
  export const device_battery: TODO
  export const device_geiger: TODO
  export const device_npc_pda: TODO
  export const devices: TODO
  export const dosimeter_env_rads_mode: TODO
  export function bind(obj: TODO): TODO
  export function can_toggle_torch(): TODO
  export function drain_device(obj: TODO, sec: TODO, loss: TODO, loss_add: TODO): TODO
  export function drain_device_on_event(obj: TODO, sec: TODO, idx: TODO, custom_loss: TODO): TODO
  export function func_battery(obj: TODO): TODO
  export function get_power_consumption(sec: TODO): TODO
  export function get_power_critical(sec: TODO): TODO
  export function initialize(): TODO
  export function is_device_charged(obj: TODO, sec: TODO, cond: TODO): TODO
  export function is_nv_active(): TODO
  export function is_pda_active(): TODO
  export function is_pda_charged(actor_only: TODO): TODO
  export function is_torch_active(): TODO
  export function menu_battery(obj: TODO): TODO
  export function on_game_start(): TODO
  export function pda_warning(): TODO
  export function print_dbg(txt: TODO, ...args: TODO[]): TODO
  export function set_nightvision(section: TODO, state: TODO): TODO
  export function set_nightvision_HUD(bShow: TODO): TODO
  export function set_pda_glitch(obj: TODO, val: TODO): TODO
  export function toggle_torch(): TODO
}

/** @customConstructor device_binder */
declare class device_binder extends object_binder {
  constructor(obj: TODO)
  update(delta: TODO): TODO
  process_power(id: TODO, section: TODO, condition: TODO): TODO
  process_torch(id: TODO, section: TODO, condition: TODO): TODO
  process_glitch(id: TODO, section: TODO, condition: TODO): TODO
  process_flicker(force: TODO): TODO
  reload(section: TODO): TODO
  reinit(): TODO
  net_spawn(se_abstract: TODO): TODO
  net_destroy(): TODO
  save(stpk: TODO): TODO
  load(stpk: TODO): TODO
}
