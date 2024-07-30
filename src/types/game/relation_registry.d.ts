/** @noSelfInFile */

declare namespace relation_registry {
  export function community_goodwill(community: Faction, entity_id: number): number
  export function set_community_goodwill(community: Faction, entity_id: number, goodwill: number): void
  export function change_community_goodwill(community: Faction, entity_id: number, goodwill: number): void
  export function community_relation(community_1: Faction, community_2: Faction): number
  export function set_community_relation(community_1: Faction, community_2: Faction, relation: number): void
  export function get_general_goodwill_between(from: number, to: number): number
}
