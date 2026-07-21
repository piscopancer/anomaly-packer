/** @noSelfInFile */

import type { Section } from 'anomaly-packer'

declare global {
  namespace tasks_fate {
    export function get_suitable_smart(min_distance: number, max_distance: number, task_id: string, var_: AnyTable): se_smart_terrain | undefined
    export function prepare_dead_squad(squad_section: Section.Item, spawn_smrt: se_smart_terrain, task_id: string, var_: AnyTable): boolean
  }
}
