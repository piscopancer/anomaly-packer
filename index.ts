import { pack } from './src/pack'
import { addonId } from './src/util'

const someTextFile = {
  prop1: '...',
  // prop2: '...',
  // prop3: '...',
}

const outName = addonId + '_build'
await pack({
  build: {
    outDirName: outName,
  },
  extends: {},
  config: {
    languages: ['eng', 'rus'] as const,
    translations: (t) => [
      t.pack<keyof typeof someTextFile>({
        translation: {
          eng: {
            prop1: 'propsdsds',
          },
          rus: {
            prop1: 'AUE',
          },
        },
        defaultId(id) {
          return id
        },
        fileName: 'lol',
        idOverrides: {
          prop1: (id) => `sos_AAA_${id}`,
        },
      }),
      t.pack<'hello' | 'goodbye'>({
        translation: {
          eng: {
            hello: 'Hello!',
            goodbye: 'Goodbye!',
          },
          rus: {
            hello: 'Привет!',
          },
        },
        fileName: addonId + '_human_interactions',
        defaultId(id) {
          return id
        },
        idOverrides: {
          hello: (id) => id + '_bruh',
        },
      }),
    ],
  },
  scripts: [{ fileName: 'main', outFileName: addonId + '_main' }],
  rawGamedata: './gamedata',
  refresh: [`C:/Users/Igor/AppData/Local/ModOrganizer/STALKER Anomaly/mods/${outName}/gamedata`],
})
