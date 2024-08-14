/** @noSelfInFile */

declare namespace relation_registry {
  export function community_goodwill(community: Community, entity_id: number): number
  export function set_community_goodwill(community: Community, entity_id: number, goodwill: number): void
  export function change_community_goodwill(community: Community, entity_id: number, goodwill: number): void
  export function community_relation(community_1: Community, community_2: Community): number
  export function set_community_relation(community_1: Community, community_2: Community, relation: number): void
  export function get_general_goodwill_between(from: number, to: number): number
}
