/** @noSelfInFile */

declare namespace ph_car {
  export function add_to_binder(npc: CGameObject, ini: system_ini, scheme: string, section: Section, storage: AnyTable): void
  export function angle_xz(npc: CGameObject, target_pos: vector): number
  export function get_katet(npc: CGameObject, target_pos: vector): number
  export function printf(): void
  export function set_scheme(npc: CGameObject, ini: system_ini, scheme: string, section: Section, gulag_name: string): void
}

/** @customConstructor action_car */
declare class action_car {
  constructor(obj: CGameObject, storage: AnyTable)
  reset_scheme(loading: boolean): void
  save(): void
  get_nearest_walkpoint(): number
  get_next_walkpoint(): number
  at_target_walkpoint(): boolean
  go_to_walkpoint(pt: number): void
  start_car(): void
  stop_car(): void
  walk_arrival_callback(index: number): void
  change_fire_pts(): void
  get_next_firepoint(): LuaMultiReturn<[number, vector]>
  rot_to_firepoint(pt: vector): void
  set_shooting(shooting: boolean): void
  fire_arrival_callback(cur_index: number): void
  set_signal(sig: string): void
  fastcall(): boolean
  update(delta: number): void
  destroy_car(): void
  fast_update(): boolean
  car_explode(): void
  net_destroy(): void
}

/** @customConstructor static_pp */
declare class static_pp {
  constructor(x: number, y: number, z: number)
  count(): number
  point(): vector
}
