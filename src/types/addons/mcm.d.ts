// WIP

// Mcm config path includes your addon id and the key of the config itself, the path is slash-separated. Populate the McmConfig type with desired values.
// Declare your AddonId type for MCM in whatever place you like, type declarations are global anyways, the below is just an example.

interface McmConfig {}

declare const ui_mcm: {
  get: <Key extends keyof McmConfig>(this: void, path: `${AddonId}/${Key}`) => McmConfig[Key]
} | null
