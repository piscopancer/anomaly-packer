/** @noSelfInFile */

import type { Section } from 'anomaly-packer'

declare global {
  namespace actor_stats {
    export function add_points(section: Section.Item, detail_key: string, count: number, points: number): void
    export function add_points_str(section: Section.Item, detail_key: string, value: string): void
    export function get_points(section: Section.Item): number
  }
}
