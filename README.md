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
