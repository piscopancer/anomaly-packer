/** @noSelfInFile */

import type { Section } from 'anomaly-packer'

declare global {
  namespace item_device {
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
    export function drain_device(obj: CGameObject, sec: Section.Item, loss: number, loss_add?: number): boolean
    export function drain_device_on_event(obj: CGameObject, sec: Section.Item, idx: number, custom_loss?: number): boolean
    export function func_battery(obj: CGameObject): void
    export function get_power_consumption(sec: Section.Item): number
    export function get_power_critical(sec: Section.Item): number
    export function initialize(): void
    export function is_device_charged(obj: CGameObject, sec: Section.Item, cond: number): boolean
    export function is_nv_active(): boolean
    export function is_pda_active(): boolean
    export function is_pda_charged(actor_only?: boolean): boolean
    export function is_torch_active(): boolean
    export function menu_battery(obj: CGameObject): string
    export function on_game_start(): void
    export function pda_warning(): boolean
    export function print_dbg(txt: string, ...args: any[]): void
    export function set_nightvision(section: Section.Item, state: boolean): void
    export function set_nightvision_HUD(bShow: boolean): void
    export function set_pda_glitch(obj: CGameObject, val: number): void
    export function toggle_torch(): void
  }
  
  /** @customConstructor device_binder */
  class device_binder extends object_binder {
    N_V: TODO // @generated field — refine type
    first_update: TODO // @generated field — refine type
    flicker: TODO // @generated field — refine type
    type: TODO // @generated field — refine type
    constructor(obj: CGameObject)
    update(delta: number): void
    process_power(id: number, section: Section.Item, condition: number): void
    process_torch(id: number, section: Section.Item, condition: number): void
    process_glitch(id: number, section: Section.Item, condition: number): void
    process_flicker(force?: boolean): void
    reload(section: Section.Item): void
    reinit(): void
    net_spawn(se_abstract: CseAbstract): boolean
    net_destroy(): void
    save(stpk: net_packet): void
    load(stpk: net_packet): void
  }

  namespace item_device {
    /** Anomaly `class "device_binder"` is also reachable on the `item_device` script namespace; typed as
     *  the instance so its methods can be captured/overridden (`item_device.device_binder.Method = ...`). */
    export const device_binder: device_binder
  }
}
