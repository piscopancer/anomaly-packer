/** @noSelfInFile */

declare namespace task_objects {
  export function get_guider(target_level: LevelName): number | undefined
}

/**
 * A task's Lua-side state, as `task_objects.script` builds it from its `tm_*.ltx` section.
 * Reachable per task id through `task_manager.get_task_manager().task_info`, which is where
 * everything the engine's `CGameTask` does not expose to scripts (giver, target, issue time,
 * status) actually lives.
 *
 * @customConstructor CGeneralTask
 */
declare class CGeneralTask {
  /** `time_global()` of the next due `check_task`; absent until the first check runs. */
  check_time?: number
  /** The `condlist_0..n` lines of the section, each already parsed. */
  condlist: any[][]
  /** Description as resolved by {@link descr_functor} this check; a string table id, not display text. */
  current_descr?: string
  /** Object id the task currently points at, or `null` when it has no target right now. */
  current_target?: number | null
  /** Title as resolved by {@link title_functor} this check; a string table id, not display text. */
  current_title?: string
  /** Raw `descr` line of the section. */
  descr: string
  /** Key into `task_functor` used to resolve {@link descr}; defaults to `condlist`. */
  descr_functor: string
  /** Set from the section's `dont_send_update_news`; suppresses the "task updated" news. */
  dont_send_update_news: boolean
  /** Set by `set_task_completed` / `set_task_failed` / `set_task_cancelled` to force the next check's outcome. */
  forced_status?: 'complete' | 'fail'
  /** Texture id used for the task's icon; defaults to `ui_pda2_mtask_overlay`. */
  icon: string
  /** The task id — the `tm_*.ltx` section name, and the key under which the manager stores it. */
  id: string
  /** Game time the task was handed out; the basis for any "how long ago / how long left" arithmetic. */
  inited_time?: Time
  /** Outcome the last check settled on, consumed by `deactivate_task`. */
  last_check_task?: 'complete' | 'fail' | 'reversed' | null
  loaded: boolean
  on_cancel?: any[] | null
  on_complete?: any[] | null
  on_fail?: any[] | null
  on_init?: any[] | null
  on_reversed?: any[] | null
  /** Sort priority, straight from the section's `prior`. */
  prior: number
  /** Seconds that must pass after completion before the task may be handed out again. */
  repeat_timeout?: number
  reward_item?: any[] | null
  reward_money?: any[] | null
  /** Map spot type the task's location uses, picked from {@link storyline} and whether it is timed. */
  spot: string
  /** Task-defined progress step; `255` once the task ended but is kept for its repeat timeout. */
  stage: number
  status: 'normal' | 'selected' | 'completed' | 'fail' | 'reversed'
  /** Key into `task_status_functor`, when the section names one. */
  status_functor?: string
  /** Whether the section marks the task as a main-plot one. */
  storyline: boolean
  /** The engine-side task object, once `give_task` created it. */
  t?: CGameTask
  /** Raw `target` line of the section. */
  target?: string
  /** Key into `task_functor` used to resolve {@link target}; defaults to `target_condlist`. */
  target_functor: string
  /** Object id of the NPC who handed the task out; `null` for tasks with no giver. */
  task_giver_id?: number | null
  /** Game time the task ended, kept while its {@link repeat_timeout} runs. */
  timeout?: Time
  /** Raw `title` line of the section. */
  title: string
  /** Key into `task_functor` used to resolve {@link title}; defaults to `condlist`. */
  title_functor: string
  /** @param id the `tm_*.ltx` section name */
  constructor(id: string)
  get_title(): string
  get_icon_name(): string
  give_task(): void
  /** @param tm accepted but unused; the manager calls this with no argument */
  check_task(tm?: number): void
  give_reward(): void
  reverse_task(): void
  deactivate_task(tsk: CGameTask): void
  /** @param target object id the task points at */
  check_level(target?: number | null): void
  /** @param target accepted but unused; every guider spot of the current level is cleared */
  remove_guider_spot(target?: number | null): void
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
