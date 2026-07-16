/** @noSelfInFile */

// Engine luabind classes that stock Anomaly (vanilla) registers but were not yet
// modelled during the vanilla pass: holders/vehicles, physics, device and console.
// Members added by modded exes live in `addons/modded_exes.d.ts` as interface merges.

//#region Holders / vehicles

/** Base holder interface (things the actor can "enter": cars, mounted guns, ladders). */
declare class holder {
  engaged(): boolean
  action(id: number, flags: number): void
  Action(id: number, flags: number): void
  SetParam(id: number, value: vector): void
  SetEnterLocked(locked: boolean): void
  SetExitLocked(locked: boolean): void
}

/** Explosive object (grenades, exploding props). */
declare class CExplosive {
  explode(): void
}

/** Drivable car. Obtained via `game_object:get_car()`. */
declare class CCar extends CGameObjectBase implements CHolderCustom {
  Action(id: number, flags: number): void
  SetParam(id: number, value: vector): void
  /** Whether the mounted weapon can hit its target */
  CanHit(): boolean
  FireDirDiff(): number
  IsObjectVisible(obj: CGameObject): boolean
  HasWeapon(): boolean
  CurrentVel(): vector
  GetfHealth(): number
  SetfHealth(value: number): number
  SetExplodeTime(time: number): void
  ExplodeTime(): number
  CarExplode(): void
  GetfFuel(): number
  SetfFuel(fuel: number): void
  GetfFuelTank(): number
  SetfFuelTank(fuel_tank: number): void
  GetfFuelConsumption(): number
  SetfFuelConsumption(fuel_consumption: number): void
  ChangefFuel(fuel: number): void
  ChangefHealth(health: number): void
  PlayDamageParticles(): void
  StopDamageParticles(): void
  StartEngine(): void
  StopEngine(): void
  IsActiveEngine(): boolean
  HandBreak(): void
  ReleaseHandBreak(): void
  GetRPM(): number
  SetRPM(value: number): void
}
declare const CCar: {
  /** Mounted weapon action ids (`CCarWeapon`) */
  readonly eWpnDesiredDir: number
  readonly eWpnDesiredPos: number
  readonly eWpnActivate: number
  readonly eWpnFire: number
  readonly eWpnAutoFire: number
  readonly eWpnToDefaultDir: number
}

//#endregion

//#region Physics

/** Scripted physics shell of an object, a set of {@link physics_element}s and joints. */
declare class physics_shell {
  apply_force(x: number, y: number, z: number): void
  get_element_by_bone_name(bone_name: string): physics_element
  get_element_by_bone_id(bone_id: number): physics_element
  get_element_by_order(order: number): physics_element
  get_elements_number(): number
  get_joint_by_bone_name(bone_name: string): physics_joint
  get_joint_by_bone_id(bone_id: number): physics_joint
  get_joint_by_order(order: number): physics_joint
  get_joints_number(): number
  block_breaking(): void
  unblock_breaking(): void
  is_breaking_blocked(): boolean
  is_breakable(): boolean
  get_linear_vel(): vector
  get_angular_vel(): vector
  freeze(): void
  unfreeze(): void
}

/** A single physics element (bone body) of a {@link physics_shell}. */
declare class physics_element {
  apply_force(x: number, y: number, z: number): void
  is_breakable(): boolean
  get_linear_vel(): vector
  get_angular_vel(): vector
  get_mass(): number
  get_density(): number
  get_volume(): number
  fix(): void
  release_fixed(): void
  is_fixed(): boolean
  global_transform(): matrix
}

/** A single physics joint (constraint between two {@link physics_element}s) of a {@link physics_shell}. */
declare class physics_joint {
  get_bone_id(): number
  get_first_element(): physics_element
  get_stcond_element(): physics_element
  set_anchor_global(x: number, y: number, z: number): void
  set_anchor_vs_first_element(x: number, y: number, z: number): void
  set_anchor_vs_second_element(x: number, y: number, z: number): void
  get_axes_number(): number
  set_axis_spring_dumping_factors(spring_factor: number, damping_factor: number, axis_num: number): void
  set_joint_spring_dumping_factors(spring_factor: number, damping_factor: number): void
  set_axis_dir_global(x: number, y: number, z: number, axis_num: number): void
  set_axis_dir_vs_first_element(x: number, y: number, z: number, axis_num: number): void
  set_axis_dir_vs_second_element(x: number, y: number, z: number, axis_num: number): void
  set_limits(low: number, high: number, axis_num: number): void
  set_max_force_and_velocity(force: number, velocity?: number, axis_num?: number): void
  get_max_force_and_velocity(force: number, velocity: number, axis_num: number): void
  get_axis_angle(axis_num: number): number
  /** Fills `lo_limit`, `hi_limit` (out params) and returns them as a multi-return. */
  get_limits(lo_limit: number, hi_limit: number, axis_num: number): LuaMultiReturn<[lo: number, hi: number]>
  /** Writes the axis direction into `axis` (mutated in place). */
  get_axis_dir(num: number, axis: vector): void
  /** Writes the anchor into `anchor` (mutated in place). */
  get_anchor(anchor: vector): void
  is_breakable(): boolean
}

//#endregion

//#region Device / console / particles

/** Render device singleton, obtained via {@link device}. */
declare class render_device {
  readonly width: number
  readonly height: number
  readonly time_delta: number
  readonly f_time_delta: number
  readonly cam_pos: vector
  readonly cam_dir: vector
  readonly cam_top: vector
  readonly cam_right: vector
  readonly fov: number
  readonly aspect_ratio: number
  readonly precache_frame: number
  readonly frame: number
  time_global(): number
  time_continual(): number
  is_paused(): boolean
  pause(pause: boolean): void
}
declare function device(): render_device

/** Game console singleton, obtained via {@link get_console}. */
declare class CConsole {
  execute(command: string): void
  execute_script(path: string): void
  execute_deferred(command: string): void
  show(): void
  hide(): void
  get_string(name: string): string
  get_integer(name: string): number
  get_bool(name: string): boolean
  get_float(name: string): number
  get_token(name: string): string
}
declare function get_console(): CConsole

/**
 * Particle system instance.
 * @customConstructor particles_object
 */
declare class particles_object {
  constructor(name: string)
  play(): void
  play_at_pos(pos: vector, xform?: matrix): void
  stop(): void
  stop_deffered(): void
  playing(): boolean
  looped(): boolean
  move_to(pos: vector, dir: vector): void
  set_position(pos: vector): void
  set_direction(dir: vector): void
  set_orientation(dir: vector): void
  last_position(): vector
  load_path(path: string): void
  start_path(looped?: boolean): void
  stop_path(): void
  pause_path(pause: boolean): void
}

//#endregion
