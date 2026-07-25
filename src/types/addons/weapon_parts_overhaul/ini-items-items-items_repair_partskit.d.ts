// AUTO-GENERATED addon pack for `weapon_parts_overhaul` by `anomaly-packer gen-addon`. Config ltx schemas.
// Refine `TODO` (= any) by hand where the mod gave no type.
// `items/items/items_repair_partskit.ltx` is never opened directly — `items/items/base.ltx` globs it in, so these sections augment
// that file's schema. The interface is path-derived, so every mod contributing to it merges here.
import type { CommaSeparatedString } from 'anomaly-packer'

declare global {
  interface ItemsItemsBaseIni {
    partskit_tool: {
      attach_angle_offset: vector
      attach_bone_name: string
      attach_position_offset: vector
      auto_attach: boolean
      cost: number
      description: string
      empty_weight: number
      inv_grid_height: number
      inv_grid_width: number
      inv_grid_x: number
      inv_grid_y: number
      inv_name: string
      inv_name_short: string
      inv_weight: number
      max_uses: number
      repair_add_condition: number
      repair_max_condition: number
      repair_min_condition: number
      repair_only: CommaSeparatedString<string[]>
      repair_part_bonus: number
      repair_parts_multi: number
      repair_parts_sections: CommaSeparatedString<string[]>
      repair_use_actor_effects: boolean
      repair_use_parts: boolean
      tier: number
      visual: string
    }
  }
}
