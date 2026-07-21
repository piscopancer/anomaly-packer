![Credit: RAW](https://i.imgur.com/2NLRHNm.jpg)

# Anomaly Packer

[📖 Documentation](https://anomaly-packer-docs.vercel.app)

Anomaly Packer is an [NPM package](https://www.npmjs.com/package/anomaly-packer) that help modders who know TypeScript to feel more confident with their code and simplify the creation of scripts and text files with a set of type-safe utility functions.

## Script project setup

Point your addon's `gamedata/scripts/tsconfig.json` at the base config the package ships. It carries all the compiler and `tstl` settings, and it wires in the Lua standard library (`pcall`, `pairs`, `string`, `table`, `math`, …) for Lua 5.1 — so you never declare those by hand, and you don't need `lua-types` in your own dependencies:

```json
{
  "extends": "anomaly-packer/tsconfig.scripts.json",
  "include": ["**/*.ts"]
}
```

Pull in the game and addon type skeletons with a single reference each (for example in an `env.d.ts`), then add only the declarations for game modules that the skeletons don't yet cover:

```ts
/// <reference types="anomaly-packer/types/game" />
/// <reference types="anomaly-packer/types/addons" />
```

The base config also selects this package as the JSX import source, so config files that produce xml — `ui`, `textures_descr`, `text` — can be written as `.tsx` with xray's own ui tags as intrinsic elements. Nothing has to be imported or configured for that beyond the `extends` above; the package owns its JSX runtime rather than augmenting React's, which is what keeps the element types resolving in an addon that has its own copy of `react`.

Texture ids are typed. Every id declared in the unpacked `ui\textures_descr` tree is known to the compiler, so a misspelled texture fails to build instead of silently rendering nothing in game. An addon that ships its own `textures_descr` file declares its ids by merging them into `UI.Textures`, after which they are accepted everywhere a texture is.

## Packing and distribution

Every generated `.script` carries a short credit comment built from your `package.json` — version, author, repository — so a file that ends up loose in someone's gamedata folder can be traced back to its source. Fields you don't have are simply omitted.

To produce a release, run the `zip` command against a finished build:

```sh
anomaly-packer zip --name my-addon
```

The archive holds `gamedata/` at its root, which is the layout Mod Organizer 2 and the other Anomaly mod managers expect, so the file installs by drag and drop with nothing to unwrap first.
