/** @noSelfInFile */

interface CGameObject {
  // NPCs
  angle(): vector
  force_set_angle(angle: vector): void
  get_enable_anomalies_pathfinding(): boolean
  set_enable_anomalies_pathfinding(enable: boolean): void
  get_enable_anomalies_damage(): boolean
  set_enable_anomalies_damage(enable: boolean): void
  set_enable_movement_collision(enable: boolean): void
  character_dialogs(): string[]
  // Actor
  get_scope_ui(): {
    name: string
    uiWindow: CUIWindow
    statics: CUIStatic[]
  }
  set_scope_ui(
    /** @example 'wpn_crosshair_mosin' */
    texture: string
  ): void
  get_actor_walk_accel(): number
  set_actor_walk_accel(accel: number): void
  get_actor_walk_back_coef(): number
  set_actor_walk_back_coef(coef: number): void
  get_actor_lookout_coef(): number
  set_actor_lookout_coef(coef: number): void
  set_actor_direction(yaw: number, pitch: number, roll?: number): void
  set_actor_direction(hpb: vector): void
  get_artefact_additional_inventory_weight(): number
  set_artefact_additional_inventory_weight(weight: number): void
  get_actor_crouch_coef(): number
  set_actor_crouch_coef(coef: number): void
  get_actor_climb_coef(): number
  set_actor_climb_coef(coef: number): void
  get_actor_walk_strafe_coef(): number
  set_actor_walk_strafe_coef(coef: number): void
  get_actor_run_strafe_coef(): number
  set_actor_run_strafe_coef(coef: number): void
  get_actor_sprint_strafe_coef(): number
  set_actor_sprint_strafe_coef(coef: number): void
  /** Force update of weight */
  update_weight(): void
  get_total_weight_force_update(): number
  get_talking_npc(): CGameObject | null
  // Bones
  get_bone_id(name: string, hud?: boolean): number
  bone_id(name: string, hud?: boolean): number
  bone_name(id: number, hud?: boolean): string
  bone_position(id: string, hud?: boolean): vector
  bone_position(bone_name: string, hud?: boolean): vector
  bone_direction(id: string, hud?: boolean): vector
  bone_direction(bone_name: string, hud?: boolean): vector
  bone_parent(id: string, hud?: boolean): number
  bone_parent(bone_name: string, hud?: boolean): number
  bone_visible(id: string, hud?: boolean): boolean
  bone_visible(bone_name: string, hud?: boolean): boolean
  set_bone_visible(id: number, visibile: boolean, recursive: boolean, hud: boolean): void
  set_bone_visible(name: string, visibile: boolean, recursive: boolean, hud: boolean): void
  bone_transform(id: number, hud?: boolean): matrix
  bone_transform(bone_name: string, hud?: boolean): matrix
  /** @returns list of all bone names of the object */
  list_bones(hud?: boolean): TODO
  /** World-space object transform */
  xform(hud?: boolean): matrix
  bounding_box(hud?: boolean): Fbox
  // Cover / combat AI
  affect_cover(): boolean
  best_cover_invalidate(): void
  can_kill_enemy(): boolean
  can_kill_member(): boolean
  fire_make_sense(): boolean
  set_aim_params(max_angle: number, min_angle: number, min_speed: number, predict_time: number): void
  set_vision_speed(value: number): void
  set_movement_speed(vel: vector): void
  memory_remove_links(obj: CGameObject): void
  // Smart cover
  get_current_smart_cover_name(): string
  get_current_loophole_id(): string
  // Restrictor / anomaly
  force_set_restrictor_type(typ: number): void
  invalidate_restrictions(): void
  is_enabled_anomaly(): boolean
  inside_anomaly(): boolean
  // Devices (torch etc.)
  is_device_enabled(): boolean
  set_device_enabled(enable: boolean): void
  update_torch(): void
  // Luminosity / visibility
  get_object_visible_distance(obj: CGameObject): number
  get_object_luminocity(obj: CGameObject): number
  get_actor_ui_luminosity(): number
  // Ranks / actor looking
  rank_name(): string
  get_actor_object_looking_at(): CGameObject | null
  get_actor_person_looking_at(): CGameObject | null
  get_actor_default_action_for_object(): string
  set_actor_box_y_offset(box_num: number, offset: number): void
  // HUD fire points (weapon in hands)
  hud_fire_point(): vector
  hud_fire_point2(): vector
  hud_fire_point_silencer(): vector
  set_hud_fire_point(value: vector): void
  set_hud_fire_point2(value: vector): void
  set_hud_fire_point_silencer(value: vector): void
  hud_fire_bone_id(): number
  hud_fire_bone2_id(): number
  hud_fire_bone_silencer_id(): number
  hud_fire_bone_name(): string
  hud_fire_bone2_name(): string
  hud_fire_bone_silencer_name(): string
  set_hud_fire_bone(bone_id: number): void
  set_hud_fire_bone(bone_name: string): void
  set_hud_fire_bone2(bone_id: number): void
  set_hud_fire_bone2(bone_name: string): void
  set_hud_fire_bone_silencer(bone_id: number): void
  set_hud_fire_bone_silencer(bone_name: string): void
  /** @returns fire params table of the weapon in hands (fire point, direction, dispersion, …) */
  g_fireParams(): TODO
  // Shaders / textures
  get_shaders(hud?: boolean): TODO
  get_default_shaders(hud?: boolean): TODO
  set_shader(id: number, shader: string, texture: string, hud?: boolean): void
  reset_shader(id: number, hud?: boolean): void
  // Script attachments
  add_attachment(name: string, model_name: string): ScriptAttachment | null
  get_attachment(name: string): ScriptAttachment | null
  remove_attachment(name: string): void
  remove_attachment(child: ScriptAttachment): void
  iterate_attachments(functor: (attachment: ScriptAttachment) => boolean | void): void
  // Holders / casts added by the fork
  get_stmgun(): CWeaponStatMgun | null
  get_projector(): CProjector | null
  cast_Knife(): CWeaponKnife | null
  cast_Missile(): CMissile | null
  cast_Explosive(): CExplosive | null
}

interface CArtefact {
  m_additional_weight: number
}

interface CActorCondition {
  GetAlcohol(): number
}

/**
 * Modded exes expose a large tuning surface on {@link CWeapon}: camera dispersion,
 * per-attachment recoil (PDM = Pitch/Dispersion Model), fire points and strap offsets.
 * All getters return the current value; setters take a single float unless noted.
 */
interface CWeapon {
  ForceSetZoomType(zoom_type: number): void
  // RPM
  RealRPM(): number
  ModeRealRPM(): number
  SetRealRPM(rpm: number): void
  SetModeRPM(rpm: number): void
  SetModeRealRPM(rpm: number): void
  // Hit
  SetHitPower(value: number): void
  SetHitPowerCritical(value: number): void
  SetHitImpulse(value: number): void
  // Dispersion / distance / misfire
  SetFireDispersion(value: number): void
  SetFireDistance(value: number): void
  SetFirstBulletDisp(value: number): void
  SetMisfireStartCondition(value: number): void
  SetMisfireEndCondition(value: number): void
  // Camera behaviour (hip)
  GetCamRelaxSpeed(): number
  GetCamRelaxSpeed_AI(): number
  GetCamDispersion(): number
  GetCamDispersionInc(): number
  GetCamDispersionFrac(): number
  GetCamMaxAngleVert(): number
  GetCamMaxAngleHorz(): number
  GetCamStepAngleHorz(): number
  SetCamRelaxSpeed(value: number): void
  SetCamRelaxSpeed_AI(value: number): void
  SetCamDispersion(value: number): void
  SetCamDispersionInc(value: number): void
  SetCamDispersionFrac(value: number): void
  SetCamMaxAngleVert(value: number): void
  SetCamMaxAngleHorz(value: number): void
  SetCamStepAngleHorz(value: number): void
  // Camera behaviour (zoom / aim)
  GetZoomCamRelaxSpeed(): number
  GetZoomCamRelaxSpeed_AI(): number
  GetZoomCamDispersion(): number
  GetZoomCamDispersionInc(): number
  GetZoomCamDispersionFrac(): number
  GetZoomCamMaxAngleVert(): number
  GetZoomCamMaxAngleHorz(): number
  GetZoomCamStepAngleHorz(): number
  SetZoomCamRelaxSpeed(value: number): void
  SetZoomCamRelaxSpeed_AI(value: number): void
  SetZoomCamDispersion(value: number): void
  SetZoomCamDispersionInc(value: number): void
  SetZoomCamDispersionFrac(value: number): void
  SetZoomCamMaxAngleVert(value: number): void
  SetZoomCamMaxAngleHorz(value: number): void
  SetZoomCamStepAngleHorz(value: number): void
  GetZoomRotateTime(): number
  SetZoomRotateTime(value: number): void
  // Crosshair inertion (per attachment)
  SetCrosshairInertion(value: number): void
  Set_Silencer_CrosshairInertion(value: number): void
  Set_Scope_CrosshairInertion(value: number): void
  Set_Launcher_CrosshairInertion(value: number): void
  // PDM recoil model — base offset
  Set_PDM_Base(value: number): void
  Set_Silencer_PDM_Base(value: number): void
  Set_Scope_PDM_Base(value: number): void
  Set_Launcher_PDM_Base(value: number): void
  Set_PDM_BuckShot(value: number): void
  // PDM recoil model — velocity factor
  Set_PDM_Vel_F(value: number): void
  Set_Silencer_PDM_Vel(value: number): void
  Set_Scope_PDM_Vel(value: number): void
  Set_Launcher_PDM_Vel(value: number): void
  // PDM recoil model — acceleration factor
  Set_PDM_Accel_F(value: number): void
  Set_Silencer_PDM_Accel(value: number): void
  Set_Scope_PDM_Accel(value: number): void
  Set_Launcher_PDM_Accel(value: number): void
  // PDM recoil model — crouch factors
  Set_PDM_Crouch(value: number): void
  Set_PDM_Crouch_NA(value: number): void
  // Fire points / offsets
  get_CurrentFirePoint(): vector
  get_CurrentFirePoint2(): vector
  get_CurrentFirePointSilencer(): vector
  Get_mOffset(): matrix
  Get_mStrapOffset(): matrix
  Set_mOffset(position: vector, orientation: vector): void
  Set_mStrapOffset(position: vector, orientation: vector): void
  Set_mFirePoint(fire_point: vector): void
  Set_mFirePoint2(fire_point: vector): void
  Set_mShellPoint(shell_point: vector): void
  // Strap bones / hands
  Get_strap_bone0(): string
  Get_strap_bone1(): string
  Get_strapped_mode(): boolean
  /** @returns hand-dependence enum (`EHandDependence`) */
  HandDependence(): number
}
