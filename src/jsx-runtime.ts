/**
 * The JSX runtime config modules compile against, selected by `jsxImportSource` in
 * `tsconfig.scripts.json` rather than by anything an addon has to write.
 *
 * Owning the runtime is what makes the element types reliable. The alternative — augmenting
 * React's own `JSX` namespace — binds the augmentation to one *resolved instance* of the
 * `react` package: the one reachable from the file declaring it. An addon that has its own
 * copy of react (which every addon does, since `react/jsx-runtime` must resolve from the
 * addon's tree) then compiles against a different instance than the one carrying the
 * augmentation, and every element reports as missing from `JSX.IntrinsicElements` even though
 * the types are present and correct. Exporting the namespace from here sidesteps instance
 * identity entirely: the compiler reads it from whatever copy of this package it resolved.
 *
 * The runtime functions are re-exported unchanged; only the types differ from React's.
 */
export { Fragment, jsx, jsxs } from 'react/jsx-runtime'

import type { JSX as ReactJSX } from 'react'

export namespace JSX {
  // The element model is React's — these pages really are rendered by `react-dom/server`.
  // Only the set of intrinsic elements is replaced, swapping html tags for xray's ui tags.
  export type Element = ReactJSX.Element
  export type ElementType = ReactJSX.ElementType
  export type ElementClass = ReactJSX.ElementClass
  export type ElementAttributesProperty = ReactJSX.ElementAttributesProperty
  export type ElementChildrenAttribute = ReactJSX.ElementChildrenAttribute
  export type IntrinsicAttributes = ReactJSX.IntrinsicAttributes
  export type IntrinsicClassAttributes<T> = ReactJSX.IntrinsicClassAttributes<T>
  export interface IntrinsicElements extends UI.Elements {}
}
