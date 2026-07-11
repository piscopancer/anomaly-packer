/** @noSelfInFile */

declare namespace task_objects {
  export function get_guider(target_level: TODO): TODO
}

/** @customConstructor CGeneralTask */
declare class CGeneralTask {
  constructor(id: TODO)
  get_title(): TODO
  get_icon_name(): TODO
  give_task(): void
  check_task(tm: TODO): void
  give_reward(): void
  reverse_task(): void
  deactivate_task(tsk: TODO): void
  check_level(target: TODO): void
  remove_guider_spot(target: TODO): void
  save(packet: TODO): void
  load(packet: net_packet): void
  save_state(m_data: TODO): void
  load_state(m_data: TODO): boolean
}
