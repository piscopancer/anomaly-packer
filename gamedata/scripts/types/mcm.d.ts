// WIP

// Mcm config path includes your addon id and the key of the config itself, the path is slash-separated. Populate the McmConfig type with desired values.
// Declare your AddonId type for MCM in whatever place you like, type declarations are global anyways, the below is just an example.

declare type McmConfig = {
  // example_slider_value: number
  // example_text_value: string
  // example_check_value: boolean
}

declare var ui_mcm:
  | {
      get: <Key extends keyof McmConfig>(this: void, path: `${AddonId}/${Key}`) => McmConfig[Key]
    }
  | undefined

declare var m_data: {}
