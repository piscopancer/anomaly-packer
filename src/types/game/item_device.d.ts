/** @noSelfInFile */

declare namespace item_device {
  /** [section] = per-stage power consumption values. */
  export const dev_consumption: Record<string, number[]>
  /** [section] = per-action power consumption values (stage 2). */
  export const dev_consumption_act: Record<string, number[]>
  /** [section] = total power consumption of a device. */
  export const dev_consumption_tot: Record<string, number>
  /** [section] = power limit below which the device turns off. */
  export const dev_critical: Record<string, number>
  export const device_battery: any
  export const device_geiger: any
  export const device_npc_pda: Record<number, any>
  export const devices: AnyTable
  export const dosimeter_env_rads_mode: boolean
  export function bind(obj: CGameObject): void
  export function can_toggle_torch(): boolean
  export function drain_device(obj: CGameObject, sec: string, loss: number, loss_add?: number): boolean
  export function drain_device_on_event(obj: CGameObject, sec: string, idx: number, custom_loss?: number): boolean
  export function func_battery(obj: CGameObject): void
  export function get_power_consumption(sec: string): number
  export function get_power_critical(sec: string): number
  export function initialize(): void
  export function is_device_charged(obj: CGameObject, sec: string, cond: number): boolean
  export function is_nv_active(): boolean
  export function is_pda_active(): boolean
  export function is_pda_charged(actor_only?: boolean): boolean
  export function is_torch_active(): boolean
  export function menu_battery(obj: CGameObject): string
  export function on_game_start(): void
  export function pda_warning(): boolean
  export function print_dbg(txt: string, ...args: any[]): void
  export function set_nightvision(section: string, state: boolean): void
  export function set_nightvision_HUD(bShow: boolean): void
  export function set_pda_glitch(obj: CGameObject, val: number): void
  export function toggle_torch(): void
}

/** @customConstructor device_binder */
declare class device_binder extends object_binder {
  constructor(obj: CGameObject)
  update(delta: number): void
  process_power(id: number, section: string, condition: number): void
  process_torch(id: number, section: string, condition: number): void
  process_glitch(id: number, section: string, condition: number): void
  process_flicker(force?: boolean): void
  reload(section: string): void
  reinit(): void
  net_spawn(se_abstract: CseAbstract): boolean
  net_destroy(): void
  save(stpk: net_packet): void
  load(stpk: net_packet): void
}
