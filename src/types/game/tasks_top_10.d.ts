/** @noSelfInFile */

declare namespace tasks_top_10 {
  export function actor_is_not_top_10(a: CGameObject, b: CGameObject): boolean
  export function almost_done_task_top_10(actor: CGameObject, npc: CGameObject): boolean
  export function complete_task_top_10(actor: CGameObject, npc: CGameObject): void
  export function start_task_top_10(actor: CGameObject, npc: CGameObject): void
  export function top_10_task_text(txt: string, task_id: string, field: string, p: any, tsk: AnyTable): string
}
