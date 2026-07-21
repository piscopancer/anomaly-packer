// AUTO-GENERATED addon pack for `3dss-for-gamma` by `anomaly-packer gen-addon`. Config ltx schemas.
// Refine `TODO` (= any) by hand where the mod gave no type.
// `custom_icon_layers/groups/group_hv.ltx` is never opened directly — `custom_icon_layers/groups/base_groups.ltx` globs it in, so these sections augment
// that file's schema. The interface is path-derived, so every mod contributing to it merges here.
import type { Section } from 'anomaly-packer'

declare global {
  interface CustomIconLayersGroupsBaseGroupsIni {
    hv: Section.Item[]
  }
}
