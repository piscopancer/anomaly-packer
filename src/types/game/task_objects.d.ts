/** @noSelfInFile */

declare namespace task_objects {
  export function get_guider(target_level: LevelName): number | undefined
}

/** @customConstructor CGeneralTask */
declare class CGeneralTask {
  check_time: TODO // @generated field — refine type
  condlist: TODO // @generated field — refine type
  current_descr: TODO // @generated field — refine type
  current_target: TODO // @generated field — refine type
  current_title: TODO // @generated field — refine type
  descr: TODO // @generated field — refine type
  descr_functor: TODO // @generated field — refine type
  dont_send_update_news: TODO // @generated field — refine type
  forced_status: TODO // @generated field — refine type
  icon: TODO // @generated field — refine type
  id: TODO // @generated field — refine type
  inited_time: TODO // @generated field — refine type
  last_check_task: TODO // @generated field — refine type
  loaded: boolean // @generated field — refine type
  on_cancel: TODO // @generated field — refine type
  on_complete: TODO // @generated field — refine type
  on_fail: TODO // @generated field — refine type
  on_init: TODO // @generated field — refine type
  on_reversed: TODO // @generated field — refine type
  prior: TODO // @generated field — refine type
  repeat_timeout: TODO // @generated field — refine type
  reward_item: TODO // @generated field — refine type
  reward_money: TODO // @generated field — refine type
  spot: string // @generated field — refine type
  stage: TODO // @generated field — refine type
  status: TODO // @generated field — refine type
  status_functor: TODO // @generated field — refine type
  storyline: TODO // @generated field — refine type
  t: TODO // @generated field — refine type
  target: TODO // @generated field — refine type
  target_functor: TODO // @generated field — refine type
  task_giver_id: TODO // @generated field — refine type
  timeout: TODO // @generated field — refine type
  title: TODO // @generated field — refine type
  title_functor: TODO // @generated field — refine type
  constructor(id: number)
  get_title(): string
  get_icon_name(): string
  give_task(): void
  check_task(tm: number): void
  give_reward(): void
  reverse_task(): void
  deactivate_task(tsk: AnyTable): void
  check_level(target: AnyTable): void
  remove_guider_spot(target: AnyTable): void
  save(packet: net_packet): void
  load(packet: net_packet): void
  save_state(m_data: AnyTable): void
  load_state(m_data: AnyTable): boolean
}

declare namespace task_objects {
  /** Anomaly `class "CGeneralTask"` is also reachable on the `task_objects` script namespace; typed as
   *  the instance so its methods can be captured/overridden (`task_objects.CGeneralTask.Method = ...`). */
  export const CGeneralTask: CGeneralTask
}
