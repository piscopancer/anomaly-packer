---
'anomaly-packer': minor
---

Type the `ui\textures_descr` texture ids, own the JSX runtime so xray ui tags resolve reliably, prepend a credit header to generated scripts, and add zip packaging.

Texture ids are generated from the unpacked `ui\textures_descr` xml tree by the new `gen-textures` script into `src/types/other/textures.d.ts`. They were previously plain `string`, where a typo produced no error and no icon — a failure visible only in game. The ids are emitted as keys of an interface rather than a union, so an addon shipping its own `textures_descr` file merges its ids into `UI.Textures` and they become valid everywhere a texture is accepted.

The package now exports its own `jsx-runtime`, selected through `jsxImportSource` in the shipped `tsconfig.scripts.json`. Augmenting React's `JSX` namespace bound the augmentation to one resolved instance of `react`, so an addon compiling against its own copy saw every xray element as missing from `JSX.IntrinsicElements` despite correct types. Exporting the namespace from this package sidesteps instance identity; the runtime functions are re-exported from React unchanged.

Every generated `.script` now carries a leading credit comment built from the addon's own `package.json`, so a file that ends up loose in someone's gamedata folder is traceable back to its source. Fields are omitted when absent. Alongside it, `zip` archives a finished build with `gamedata/` at the archive root — the layout Mod Organizer 2 expects — so a release installs by drag and drop.

The two schema generators (`gen-sections`, `gen-ini-schemas`) were moved onto a shared ts-morph assembly step, which builds each emitted `.d.ts` structurally instead of by string-stitching and keeps both generators producing the same always-valid shape. Generated addon type trees for 3DSS-for-GAMMA are included.
