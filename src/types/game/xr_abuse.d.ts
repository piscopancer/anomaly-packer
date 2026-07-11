/** @noSelfInFile */

declare namespace xr_abuse {
  export function add_abuse(npc: TODO, value: TODO): void
  export function add_to_binder(npc: TODO, ini: TODO, scheme: TODO, section: TODO, st: TODO, temp: TODO): TODO
  export function clear_abuse(npc: TODO): void
  export function configure_actions(npc: TODO, ini: TODO, scheme: TODO, section: TODO, stype: TODO, temp: TODO): TODO
  export function disable_abuse(npc: TODO): void
  export function enable_abuse(npc: TODO): void
  export function is_abuse(npc: TODO): boolean
  export function setup_generic_scheme(npc: TODO, ini: TODO, scheme: TODO, section: TODO, stype: TODO, temp: TODO): void
}

/** @customConstructor CAbuseManager */
declare class CAbuseManager {
  constructor(npc: TODO, storage: TODO)
  SetAbuseRate(rate: TODO): void
  abused(): TODO
  update(): boolean
  addAbuse(value: TODO): void
  clearAbuse(): void
  disableAbuse(): void
  enableAbuse(): void
}

/** @customConstructor action_abuse_hit */
declare class action_abuse_hit extends action_base {
  constructor(npc_name: TODO, action_name: TODO, storage: TODO, char_ini: TODO)
  initialize(): void
  execute(): void
  finalize(): void
}

/** @customConstructor evaluator_abuse */
declare class evaluator_abuse extends property_evaluator {
  constructor(name: TODO, storage: TODO)
  evaluate(): boolean
}
