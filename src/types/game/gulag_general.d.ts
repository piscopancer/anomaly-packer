/** @noSelfInFile */

declare namespace gulag_general {
  export const job_info_by_job_type_id: AnyTable
  export function get_job_precondition(job: AnyTable): ((this: void, ...args: any[]) => unknown) | undefined
  export function get_job_prefix_name(job: AnyTable): string | undefined
  export function get_job_prior(job: AnyTable): number
  export function get_job_type(job: AnyTable): string
  export function load_job(smart: se_smart_terrain, debug_save?: boolean): void
}
