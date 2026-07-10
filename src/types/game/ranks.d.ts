/** @noSelfInFile */

declare namespace ranks {
  export function get_obj_rank_name(obj: CGameObject): Rank | MonsterRank | ''
  export function get_player_rank_name(): Rank | ''
  export function get_player_reputation(): number
  export function get_rank_interval(name: Rank | MonsterRank): [number, number] | undefined
  export function get_rank_name(rank: number, tbl: Record<Rank | MonsterRank, [number, number]>): Rank | MonsterRank | undefined
  export function get_se_obj_rank_name(obj: CseAbstract): Rank | MonsterRank
  export function parse_ranks(s: string, tbl: Record<Rank | MonsterRank, [number, number]>): Rank | MonsterRank
  export function read_all_ranks(): void
}
