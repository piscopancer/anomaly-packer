/** @noSelfInFile */

declare namespace utils_item {
  export function addon_attached(obj: CGameObject, addon: 'sc' | 'sl' | 'gl' | string, flag?: number): boolean
  export function attach_addon(wpn: CGameObject, addon: CGameObject, typ: string, ignore?: boolean): void
  export function can_attach_gl(wpn: CGameObject, addon: CGameObject, ignore?: boolean): boolean
  export function can_attach_scope(wpn: CGameObject, addon: CGameObject, ignore?: boolean): boolean
  export function can_attach_silencer(wpn: CGameObject, addon: CGameObject, ignore?: boolean): boolean
  export function collect_amount(npc: CGameObject, section: string, mode: number): number
  export function create_amount(npc: CGameObject, section: string, amount: number, basic?: boolean): void
  export function degrade(obj: CGameObject, num: number): number | undefined
  export function delay_event(to_create: string[], to_release: number[], effect: AnyTable, news?: boolean, delay?: number): void
  export function detach_addon(wpn: CGameObject, addon?: CGameObject | string, typ?: string, ignore?: boolean): void
  export function discharge(obj: CGameObject, num?: number): number | undefined
  export function extract_upgrade(tree: AnyTable, group: string, not_first?: boolean): void
  export function get_addon_flag(obj: CGameObject, with_int?: boolean): number
  export function get_addon_status(obj: CGameObject, addon: string): number
  export function get_ammo(section: string, id?: number, by_key?: boolean): AnyTable
  export function get_amount(npc: CGameObject, section: string, mode: number): number
  export function get_attached_gl(wpn: CGameObject, ignore?: boolean): string | false | undefined
  export function get_attached_scope(wpn: CGameObject, ignore?: boolean): string | false | undefined
  export function get_attached_silencer(wpn: CGameObject, ignore?: boolean): string | false | undefined
  export function get_cond_static(condition: number): number
  export function get_defined_uses(sec_d: string): AnyTable
  export function get_item_cost(obj: CGameObject, profile: string): number | false | undefined
  export function get_item_remaining_uses(obj: CGameObject): number
  export function get_item_trade_status(obj: CGameObject, profile: string): number | undefined
  export function get_outfit_belt_size(obj?: CGameObject, sec?: string): number | undefined
  export function get_outfit_property(obj: CGameObject, sec: string, name: string, def?: any): any
  export function get_outfit_protection(obj: CGameObject, sec: string, name: string, def?: number): number
  export function get_param(section: string, id: number, param: string, typ?: string, add?: boolean): any
  export function get_upgrade_prop_tool(prop: string): string | undefined
  export function get_upgrade_sect_tool(sec: string, sect_u: string): string | undefined
  export function get_upgrades_installed(obj: CGameObject | null, id?: number, to_key?: boolean): AnyTable
  export function get_upgrades_tools(section: string): AnyTable
  export function get_upgrades_tree(section: string, new_table?: boolean): AnyTable
  export function get_wpn_param(obj: CGameObject, sec: string, name: string, def?: any): any
  export function has_attached_gl(wpn: CGameObject): boolean
  export function has_attached_scope(wpn: CGameObject): boolean | string
  export function has_attached_silencer(wpn: CGameObject): boolean
  export function has_item_by_id(npc: CGameObject, id: number, section?: string): boolean
  export function has_quest_item(npc: CGameObject): boolean | undefined
  export function has_scope(section: string): string | undefined
  export function has_this_upgrade(obj: CGameObject, sec: string, up_sec: string): boolean
  export function has_upgrades(obj: CGameObject, sec?: string): boolean
  export function in_actor_inv(obj: CGameObject): boolean
  export function in_actor_ruck(obj: CGameObject): boolean
  export function in_npc_inv(npc: CGameObject, obj: CGameObject): boolean
  export function is_degradable(obj: CGameObject, sec?: string): boolean
  export function is_overweight(npc: CGameObject, npc_id?: number, comp_weight?: number): boolean
  export function item_is_fa(o: CGameObject, c?: number): boolean
  export function on_game_start(): void
  export function on_get_item_cost(kind: string, obj: CGameObject, profile: string, calculated_cost: number, ret: AnyTable): void
  export function print_dbg(fmt: string, ...args: any[]): void
  export function support_attachments(wpn: CGameObject): boolean
  export function switch_on_off(id: number): void
  export function switch_on_off_steps(id: number): boolean
  export function transfer_amount(npc_from: CGameObject, npc_to: CGameObject, section: string, amount: number, can_create?: boolean): void
}
