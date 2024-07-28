/** @noSelfInFile */

declare namespace level {
  export function send(net_packet: TODO, reliable?: boolean, sequential?: boolean, high_priority?: boolean, send_immediately?: boolean): void
  /** Target object at the crosshair */
  export function get_target_obj(): CGameObject | null
  /** Distance to an object at the crosshair */
  export function get_target_dist(): number
  export function get_target_element(): number
  export function spawn_item(section: string, pos: vector, level_vertex_id: number, parent_id: number, return_item?: boolean): void
  export function get_active_cam(): 0 | 1 | 2 | 3 | 4
  export function set_active_cam(mode: 0 | 1 | 2 | 3 | 4): void
  export function get_start_time(): CTime
  export function get_view_entity(): CGameObject
  export function set_view_entity(obj: CGameObject): void
  export function get_weather(): Weather
  export function set_weather(weather: Weather, force: boolean): void
  export function set_weather_fx(weather: string): boolean
  export function start_weather_fx_from_time(weather: string, time: number): boolean
  export function is_wfx_playing(): boolean
  export function get_wfx_time(): number
  export function stop_weather_fx(): void
  export function environment(): TODO
  export function set_time_factor(factor: number): void
  export function get_time_factor(): number
  export function set_game_difficulty(diff: 0 | 1 | 2 | 3): void
  export function get_game_difficulty(): number
  export function get_time_days(): number
  export function get_time_hours(): number
  export function get_time_minutes(): number
  export function change_game_time(d: number, h: number, m: number): void
  export function high_cover_in_direction(level_vertex_id: number, dir: vector): number
  export function low_cover_in_direction(level_vertex_id: number, dir: vector): number
  export function vertex_in_direction(level_vertex_id: number, dir: vector, distance: number): number
  export function rain_factor(): number
  export function patrol_path_exists(path: string): boolean
  export function vertex_position(level_vertex_id: number): vector
  export function name(): string
  export function prefetch_sound(name: string): void
  export function client_spawn_manager(): TODO
  export function map_add_object_spot_ser(id: number, spot_type: string, text: string): void
  export function map_add_object_spot(id: number, spot_type: string, text: string): void
  export function map_remove_object_spot(id: number, spot_type: string): void
  export function map_has_object_spot(id: number, spot_type: string): number
  export function map_change_spot_hint(id: number, spot_type: string, text: string): void
  export function add_dialog_to_render(dialog_window: TODO /** CUIDialogWnd */): void
  export function remove_dialog_to_render(dialog_window: TODO /** CUIDialogWnd */): void
  export function hide_indicators(): void
  export function hide_indicators_safe(): void
  export function show_indicators(): void
  export function show_weapon(show: boolean): void
  export function add_call(lua_obj: TODO, condition: TODO, action: TODO): void
  // add_call(): TODO
  // add_call(): TODO
  export function remove_call(lua_obj: TODO, condition: TODO, action: TODO): void
  // remove_call(): TODO
  // remove_call(): TODO
  export function remove_calls_for_object(lua_obj: TODO): void
  export function present(): boolean
  export function disable_input(): void
  export function enable_input(): void
  export function spawn_phantom(pos: vector): void
  export function get_bounding_volume(): TODO // Fbox
  export function iterate_sounds(prefix: string, max_count: number, functor: () => void): void
  // iterate_sounds(): TODO
  export function physics_world(): TODO //cphysics_world_scripted
  export function get_snd_volume(): number
  export function get_rain_volume(): number
  export function set_snd_volume(volume: number): void
  export function add_cam_effector(path: string, id: number, cyclic: boolean, callback: string, fov?: number, hud?: boolean, power?: number): void
  export function remove_cam_effector(id: number): void
  export function set_cam_effector_factor(id: number, factor: number): void
  export function get_cam_effector_factor(id: number): number
  export function get_cam_effector_length(id: number): number
  export function check_cam_effector(id: number): boolean
  export function add_pp_effector(path: string, id: number, cyclic: boolean): void
  export function set_pp_effector_factor(id: number, factor: number, factor_sp?: number): void
  export function remove_pp_effector(id: number): void
  export function add_complex_effector(section: string, id: number): void
  export function remove_complex_effector(id: number): void
  export function vertex_id(pos: vector): number
  export function game_id(): number
  export function ray_pick(start: vector, dir: vector, range: number, target: rq_target, result: rq_result, ignore_obj: CGameObject): boolean
  export function press_action(cmd: number): void
  export function release_action(cmd: number): void
  export function hold_action(cmd: number): void
  export function actor_moving_state(): number
  export function get_env_rads(): number
  export function iterate_nearest(pos: vector, radius: number, functor: () => void): void
  export function pick_material(start_pos: vector, dir: vector, distance: number, ignore_obj: CGameObject): string
}
