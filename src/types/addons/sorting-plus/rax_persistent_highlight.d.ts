// AUTO-GENERATED addon pack for `sorting-plus` by `anomaly-packer gen-addon`. Lua API of rax_persistent_highlight.script.
// Refine `TODO` (= any) by hand where the mod gave no type.

/** @noSelf */
declare const rax_persistent_highlight: {
  clr_cache: AnyTable
  change_alpha(clr: TODO, a: TODO): TODO
  pr(txt: TODO, ...args: any[]): void
  /** functor should return an ARGB for the highlight color. recomend low alpha values. name is mostly for aplhabetical priority. will not conflict. there is no unregister, just retun nil if you don't want to use. */
  register(name: TODO, functor: TODO): void
}
