export * from './pack'
export * from './zip'
export * from './meta'

export * from './texts'
export * from './types'
// The `Section` namespace (Section.Weapon, Section.Item, …, Section.All) and its augmentable
// interfaces, reachable straight from 'anomaly-packer'. Import as `import type { Section } from
// 'anomaly-packer'`; addons augment via `declare module 'anomaly-packer' { namespace Section }`.
export type * from './types/sections'
