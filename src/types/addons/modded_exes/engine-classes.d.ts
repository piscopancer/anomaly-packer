/** @noSelfInFile */

// Engine classes extended or newly added by modded exes.

/**
 * Script attachment — a renderable model attached to a game object (or to another
 * attachment), with its own transform, bones, UI and lights. Created via
 * {@link CGameObject.add_attachment}. Entirely new in modded exes.
 */
declare class ScriptAttachment {
  /** Arbitrary user data table stored on the attachment */
  userdata: AnyTable
  // Hierarchy
  set_parent(parent: ScriptAttachment): void
  set_parent(parent: CGameObject): void
  set_parent_level(): void
  get_parent(): ScriptAttachment | CGameObject | null
  add_attachment(name: string, model_name: string): ScriptAttachment | null
  get_attachment(name: string): ScriptAttachment | null
  remove_attachment(name: string): void
  remove_attachment(child: ScriptAttachment): void
  iterate_attachments(functor: (attachment: ScriptAttachment) => boolean | void): void
  // Transform
  set_position(pos: vector): void
  set_position(x: number, y: number, z: number): void
  get_position(): vector
  set_rotation(rot: vector): void
  set_rotation(x: number, y: number, z: number): void
  get_rotation(): vector
  set_origin(origin: vector): void
  set_origin(x: number, y: number, z: number): void
  get_origin(): vector
  set_scale(scale: vector): void
  set_scale(x: number, y: number, z: number): void
  set_scale(uniform: number): void
  get_scale(): vector
  get_transform(): matrix
  get_center(): vector
  // Bones
  bone_id(bone_name: string): number
  bone_name(bone_id: number): string
  bone_visible(bone_id: number): boolean
  bone_visible(bone_name: string): boolean
  set_bone_visible(bone_id: number, visible: boolean, recursive: boolean): void
  set_bone_visible(bone_name: string, visible: boolean, recursive: boolean): void
  bone_transform(bone_id: number): matrix
  bone_transform(bone_name: string): matrix
  bone_position(bone_id: number): vector
  bone_position(bone_name: string): vector
  bone_direction(bone_id: number): vector
  bone_direction(bone_name: string): vector
  bone_parent(bone_id: number): number
  bone_parent(bone_name: string): number
  set_parent_bone(bone_id: number): void
  set_parent_bone(bone_name: string): void
  get_parent_bone(): number
  list_bones(): TODO
  // Bone callbacks (copy transform between bones, or supply a matrix functor)
  bone_callback(bone_id: number, source_bone_id: number, enable: boolean): void
  bone_callback(bone_name: string, source_bone_name: string, enable: boolean): void
  bone_callback(bone_id: number, source_bone_name: string, enable: boolean): void
  bone_callback(bone_name: string, source_bone_id: number, enable: boolean): void
  bone_callback(bone_id: number, functor: (this: void) => matrix, enable: boolean): void
  bone_callback(bone_name: string, functor: (this: void) => matrix, enable: boolean): void
  remove_bone_callback(bone_id: number): void
  remove_bone_callback(bone_name: string): void
  // Model / type / animation
  set_type(type: number): void
  get_type(): number
  set_model(model_name: string, keep_bone_callbacks?: boolean): void
  get_model(): string
  set_name(name: string): void
  get_name(): string
  /** @returns motion length */
  play_motion(name: string, mixin?: boolean, speed?: number): number
  // Script UI (attached UI window)
  set_ui(ui_func: string): void
  get_ui(): string
  set_ui_bone(bone_id: number): void
  set_ui_bone(bone_name: string): void
  get_ui_bone(): number
  set_ui_position(pos: vector): void
  set_ui_position(x: number, y: number, z: number): void
  get_ui_position(): vector
  set_ui_rotation(rot: vector): void
  set_ui_rotation(x: number, y: number, z: number): void
  get_ui_rotation(): vector
  set_ui_scale(scale: vector): void
  set_ui_scale(x: number, y: number, z: number): void
  get_ui_scale(): vector
  set_ui_origin(origin: vector): void
  set_ui_origin(x: number, y: number, z: number): void
  get_ui_origin(): vector
  // Lights
  attach_light(light: TODO): void
  detach_light(): void
  get_light(): TODO
  set_light_bone(bone_id: number): void
  set_light_bone(bone_name: string): void
  get_light_bone(): number
  // Shaders
  get_shaders(): TODO
  get_default_shaders(): TODO
  set_shader(id: number, shader: string, texture: string): void
  reset_shader(id: number): void
}

interface holder {
  /** Object currently occupying / owning the holder */
  Owner(): CGameObject | null
}

interface CExplosive {
  /** Id of the object that initiated the explosion */
  Initiator(): number
  SetInitiator(id: number): void
  LoadExplosiveSection(section: string): void
}

interface CCar {
  GetSpeed(): number
  SetTargetSpeed(mps: number): void
  ClearTargetSpeed(): void
  SetThrottle(k: number): void
  SetSteer(k: number): void
  GetWheelFriction(): number
  SetWheelFriction(mu_factor: number): void
  TransmissionUp(): void
  TransmissionDown(): void
  CurrentTransmission(): number
  Transmission(num: number): void
  RefWheelMaxSpeed(): number
  EnginePower(): number
  EngineCurTorque(): number
  DoorOpen(id: number): boolean
  DoorClose(id: number): boolean
  DoorUse(id: number): boolean
  DoorSwitch(id: number): boolean
  IsDoor(id: number): boolean
  SetUseAction(text: string): void
  GetFlyWeightAdd(): number
  SetFlyWeightAdd(value: number): void
  /** Bone id of the elevator/aileron control */
  GetControlEle(): number
  GetControlYaw(): number
  GetControlPit(): number
  GetControlRol(): number
}

interface physics_shell {
  apply_torque(x: number, y: number, z: number): void
  set_force_exact_integration(value: boolean): void
  set_linear_vel(vel: vector): void
  set_angular_vel(vel: vector): void
}

interface physics_element {
  apply_torque(x: number, y: number, z: number): void
}

interface render_device {
  /** Pause the game with full flags (menu-style pause) */
  pause_ex(pause: boolean): void
}

interface particles_object {
  set_hud_mode(mode: boolean): void
}

interface CConsole {
  /** @returns min/max bounds of a console float/integer variable */
  get_variable_bounds(name: string): LuaMultiReturn<[min: number, max: number]>
  /** @returns list of allowed token values of a console token variable */
  get_token_list(name: string): string[]
}

/** Thrown weapon (grenade). New in modded exes. */
declare class CMissile extends CGameObject {
  GetMinForce(): number
  GetMaxForce(): number
  GetThrowForce(): number
  GetConstForce(): number
  IsConstPower(): boolean
  GetThrowPoint(): vector
  GetThrowDir(): vector
}
declare const CMissile: {
  readonly eThrowStart: number
  readonly eReady: number
  readonly eThrow: number
  readonly eThrowEnd: number
}

/** Melee (knife) weapon. Hit params exported by modded exes. */
declare class CWeaponKnife extends CGameObject {
  GetHit1Power(): number
  GetHit2Power(): number
  GetHit1PowerCritical(): number
  GetHit2PowerCritical(): number
  GetHit1Impulse(): number
  GetHit2Impulse(): number
  SetHit1Power(power: number): void
  SetHit2Power(power: number): void
  SetHit1PowerCritical(power: number): void
  SetHit2PowerCritical(power: number): void
  SetHit1Impulse(impulse: number): void
  SetHit2Impulse(impulse: number): void
}

/** Stationary mounted machine gun. New in modded exes (`STATIONARYMGUN_NEW`). */
declare class CWeaponStatMgun extends CGameObject {
  Action(id: number, flags: number): void
  SetParam(id: number, value: vector): void
  IsWorking(): boolean
  GetState(): number
  GetStateDelay(): number
  GetReloadDelay(): number
  GetOwner(): CGameObject | null
  GetFirePos(): vector
  GetFireDir(): vector
  ExitPosition(): vector
  GetTraverseLimitHorz(): vector2
  SetTraverseLimitHorz(limit: vector2): void
  GetTraverseLimitVert(): vector2
  SetTraverseLimitVert(limit: vector2): void
  GetActorOffsets(): vector
  SetActorOffsets(offsets: vector): void
  GetBaseDispersion(cartridge_k: number): number
  GetFireDispersion(with_cartridge: boolean, for_crosshair?: boolean): number
  GetAnimation(id: number): string
  SetAnimation(id: number, anim: string): void
  GetAmmoMagSize(): number
  GetAmmoElapsed(): number
  SetAmmoElapsed(count: number): void
  GetAmmoType(): number
  SetAmmoType(type: number): void
  SetNextAmmoTypeOnReload(ammo_type?: number): void
}
declare const CWeaponStatMgun: {
  readonly eWpnActivate: number
  readonly eWpnFire: number
  readonly eWpnDesiredPos: number
  readonly eWpnDesiredDir: number
  readonly eWpnDesiredAng: number
  readonly eWpnReload: number
  readonly eStateIdle: number
  readonly eStateFire: number
  readonly eStateReload: number
  readonly eAnimBody: number
  readonly eAnimLegs: number
}

/** Searchlight/projector. New in modded exes (`PROJECTOR_NEW`). */
declare class CProjector extends CGameObject {
  Action(id: number, flags: number): void
  SetParam(id: number, value: vector): void
}
declare const CProjector: {
  readonly eActive: number
  readonly eSwitch: number
  readonly eDesiredPos: number
  readonly eDesiredDir: number
  readonly eDesiredAng: number
}

/** Silent solar rifle system weapon (`WeaponSSRS`). New object type, no extra script methods. */
declare class CWeaponSSRS extends CGameObject {}

// --- debug render ---

/** Base scriptable debug-render object. Obtained via the {@link debug_render} namespace. */
declare class DBG_ScriptObject {
  /** ARGB color */
  color: number
  hud: boolean
  visible: boolean
  cast_dbg_sphere(): DBG_ScriptSphere | null
  cast_dbg_box(): DBG_ScriptBox | null
  cast_dbg_line(): DBG_ScriptLine | null
}
declare class DBG_ScriptSphere extends DBG_ScriptObject {
  matrix: matrix
}
declare class DBG_ScriptBox extends DBG_ScriptObject {
  matrix: matrix
  size: vector
}
declare class DBG_ScriptLine extends DBG_ScriptObject {
  point_a: vector
  point_b: vector
}
declare namespace debug_render {
  export function add_object(id: number, type: number): DBG_ScriptObject
  export function add_object(name: string, type: number): DBG_ScriptObject
  export function remove_object(id: number): void
  export function remove_object(name: string): void
  export function get_object(id: number): DBG_ScriptObject | null
  export function get_object(name: string): DBG_ScriptObject | null
  export function get_flags(): number
  export function set_flags(flags: number): void
}
