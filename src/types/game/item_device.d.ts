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
  export function bind(obj: TODO): void
  export function can_toggle_torch(): boolean
  export function drain_device(obj: TODO, sec: TODO, loss: TODO, loss_add: TODO): boolean
  export function drain_device_on_event(obj: TODO, sec: TODO, idx: TODO, custom_loss: TODO): boolean
  export function func_battery(obj: TODO): void
  export function get_power_consumption(sec: TODO): number
  export function get_power_critical(sec: TODO): number
  export function initialize(): void
  export function is_device_charged(obj: TODO, sec: TODO, cond: TODO): boolean
  export function is_nv_active(): boolean
  export function is_pda_active(): boolean
  export function is_pda_charged(actor_only: TODO): boolean
  export function is_torch_active(): boolean
  export function menu_battery(obj: TODO): string
  export function on_game_start(): void
  export function pda_warning(): boolean
  export function print_dbg(txt: TODO, ...args: TODO[]): void
  export function set_nightvision(section: TODO, state: TODO): void
  export function set_nightvision_HUD(bShow: TODO): void
  export function set_pda_glitch(obj: TODO, val: TODO): void
  export function toggle_torch(): void
}

/** @customConstructor device_binder */
declare class device_binder extends object_binder {
  constructor(obj: TODO)
  update(delta: TODO): void
  process_power(id: TODO, section: TODO, condition: TODO): void
  process_torch(id: TODO, section: TODO, condition: TODO): void
  process_glitch(id: TODO, section: TODO, condition: TODO): void
  process_flicker(force: TODO): void
  reload(section: TODO): void
  reinit(): void
  net_spawn(se_abstract: TODO): boolean
  net_destroy(): void
  save(stpk: TODO): void
  load(stpk: TODO): void
}
