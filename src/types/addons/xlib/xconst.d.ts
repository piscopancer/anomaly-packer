// AUTO-GENERATED addon pack for `xlib` by `anomaly-packer gen-addon`. Lua API of xconst.script.
// Refine `TODO` (= any) by hand where the mod gave no type.

/** @noSelf */
declare const xconst: {
  /** Actor entity ID (engine convention: actor allocated as first server slot, db.actor:id() == 0) */
  ACTOR_ENTITY_ID: number
  /** Invalid entity ID (u16 MAX, alife_space.h:39, 0xFFFF) */
  INVALID_ENTITY_ID: number
  /** Invalid game vertex ID (u16 MAX, GameGraph::_GRAPH_ID(-1) at xrServer_Objects_ALife.cpp:369) */
  INVALID_GAME_VERTEX_ID: number
  /** Invalid level vertex ID (u32 MAX, 0xFFFFFFFF) */
  INVALID_LEVEL_VERTEX_ID: number
}
