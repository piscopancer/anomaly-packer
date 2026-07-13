/** @noSelfInFile */

declare namespace task_objects {
  export function get_guider(target_level: string): number | undefined
}

/** @customConstructor CGeneralTask */
declare class CGeneralTask {
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
