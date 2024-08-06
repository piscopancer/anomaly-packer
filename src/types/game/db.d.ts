/** @noSelfInFile */

declare namespace db {
  const actor: CGameObject | null
  const actor_binder: ObjectBinder
  const offline_objects: Record<
    number,
    {
      level_vertex_id: number | null
    }
  >
  const storage: Record<
    string,
    {
      pstor: Record<string, any>
    }
  >
  const spawned_vertex_by_id: Record<number, TODO>
  const cc_icc: boolean
  const cc_npc: boolean
  const cc_vrb: boolean
  const gameover_credits_started: boolean
  const trader: TODO
  const zone_by_name: Record<string, TODO>
}
