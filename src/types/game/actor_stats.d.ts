/** @noSelfInFile */

declare namespace actor_stats {
  export function add_points(section: string, detail_key: string, count: number, points: number): void
  export function add_points_str(section: string, detail_key: string, value: string): void
  export function get_points(section: string): number
}
