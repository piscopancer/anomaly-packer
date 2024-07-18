![Credit: RAW](https://i.imgur.com/2NLRHNm.jpg)

# Piscopancer's Anomaly Packer

## Project

This project uses [typescript-to-lua](https://www.npmjs.com/package/typescript-to-lua) package to transpile TypeScript code to Lua, which can be used by the game after slight tweaking within a custom function for transpilation.

## Preparation

1. `bun run build`,
2. Archive build folder and treat it as an addon.

## Rules of Typescript to Lua transpilation

- Every file in `/src/scripts` should have a corresponding output `.script` file in `/build/gamedata/scripts`.
- TypeScript files under `/src/scripts` cannot be modules - they cannot `export` or `import` from other files. For data interchange between scripts modules (`var`s) in `types.d.ts` should be declared, each module having the name of the file in `/build/gamedata/scripts`. E.g.

  ```ts
  // types.d.ts

  // this is a module with `defaultConfig` that you can use globally on other scripts
  var pcprs_healing_campfires_mcm: {
    defaultConfig: {
      // ...
    }
  }
  ```

- Variables and functions should be global for easy access, FUCK the rules, there are none. Custom function for transpilation takes care of it.
