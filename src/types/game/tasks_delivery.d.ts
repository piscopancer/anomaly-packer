/** @noSelfInFile */

import type { Section } from 'anomaly-packer'

declare global {
  namespace tasks_delivery {
    export function is_delivery_task(section: Section.Item): boolean
    export function on_game_start(): void
  }
}
