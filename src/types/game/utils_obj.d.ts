/** @noSelfInFile */

import type { Section } from 'anomaly-packer'

declare global {
  namespace utils_obj {
    export function accessible(npc: CGameObject, point: number | vector): boolean
    export function add_anim(npc: CGameObject, anm: string): void
    export function assign_squad_to_smart(squad_id: number, id: number): void
    export function create_squad(section: Section.Item, smart_name: string): sim_squad_scripted | undefined
    export function debug_nearest(npc: CGameObject, msg: string, ...args: any[]): void
    export function execute_script_on_squad(obj: CGameObject, script_to_execute: (member: CGameObject, ...args: any[]) => void, ...args: any[]): void
    export function execute_script_on_squad_not_commander(obj: CGameObject, script_to_execute: (member: CGameObject, ...args: any[]) => void, ...args: any[]): void
    export function find_close_cover(npc: CGameObject, base_position: vector, pos: vector, cover_dist?: number, mn?: number, mx?: number): number | false
    export function find_cover_in_rand_direction(npc: CGameObject, base_point: number, pos: vector): number | false
    export function find_random_cover(npc: CGameObject, pos: vector, min_rad: number, max_rad: number): number | false
    export function get_commander(npc: CGameObject): CGameObject | undefined
    export function get_communities_list(): string[]
    export function get_communities_list_key(): { [community: Community]: boolean }
    export function get_current_action_id(npc: CGameObject): number | false
    export function get_nearest_object(npc: CGameObject, objects: AnyTable, max_dist: number): LuaMultiReturn<[CGameObject, number]> | undefined
    export function get_nearest_stalker(npc: CGameObject | 'cam'): LuaMultiReturn<[CGameObject, number]> | undefined
    export function get_nearest_waypoint(obj: CGameObject, pathname: string, ptr: number, cnt: number): number | undefined
    export function get_rank_list(): string[]
    export function get_reputation_list(): string[]
    export function get_reputation_name(value: number): string | undefined
    export function get_sound(snd: string): sound_object | undefined
    export function get_squad_commander_action(npc: CGameObject): number | undefined
    export function get_squad_count(npc: CGameObject): number
    export function graph_distance(vid1: number, vid2: number): number
    export function in_los(npc: CGameObject, be: CGameObject, friend: CGameObject): boolean
    export function is_actor(object: CGameObject, c?: number): boolean
    export function is_day(): boolean
    export function is_night(): boolean
    export function is_time_spent_in_zone(s?: number, m?: number, h?: number, d?: number, w?: number, mo?: number): boolean
    export function is_trader(obj: CGameObject): boolean
    export function lmove(npc: CGameObject, vid: number, old_vid?: number): number | undefined
    export function nearest_object(s: string | number, offline?: boolean): LuaMultiReturn<[CseAbstract, number]> | undefined
    export function npc_in_zone(npc: CGameObject, zone: string | CGameObject): boolean
    export function parse_waypoint_data(pathname: string, wpflags: number, wpname: string): AnyTable
    export function path_parse_waypoints(pathname: string): AnyTable
    export function path_parse_waypoints_from_arglist(pathname: string, num_points: number, ...args: any[]): AnyTable
    export function play_sound(path: string, vol?: number): void
    export function print_dbg(...args: any[]): void
    export function safe_bone_pos(obj: CGameObject, bone: string): vector
    export function send_to_nearest_accessible_vertex(npc: CGameObject, v_id: number, caller?: CGameObject): number
    export function smart_has_uncommon_squad(name: string, only_arrived?: boolean): LuaMultiReturn<[number, string]> | undefined
    export function squad_in_los(npc: CGameObject, enemy: CGameObject): boolean
    export function stalker_at_waypoint(stalker: CGameObject, patrol_path: AnyTable, path_point: number): boolean
    export function switch_offline(id: number): void
    export function switch_online(id: number): void
    export function time_spent_in_zone(i: number): number | false
    export function try_go_aside_object(npc: CGameObject, friend: CGameObject, pos: vector, old_vid?: number): number | undefined
    export function try_go_backward(npc: CGameObject, radius: number, old_vid?: number): number | undefined
    export function try_go_cover(npc: CGameObject, pos: vector, old_vid?: number, r?: number): number | undefined
    export function try_go_position(npc: CGameObject, pos: vector, old_vid?: number): number | undefined
    export function try_to_strafe(npc: CGameObject, old_vid?: number): number | undefined
    export function valid_vertex(npc: CGameObject, vid: number): number | false
  }
}
