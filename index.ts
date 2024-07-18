import { pack } from './src/pack'
import { addonId } from './src/util'
// import { createAllTextFiles } from './src/texts'
// import { addonId } from './src/util'
// import { transpile } from './ts-to-lua'

const mo2AddonName = 'build'

// async function updateAddonInMo2() {
//   try {
//     const mo2Folder = `C:/Users/Igor/AppData/Local/ModOrganizer/STALKER Anomaly/mods/${mo2AddonName}/gamedata`
//     await fs.rm(mo2Folder, { recursive: true, force: true })
//     const sourceFolder = `C:/dev/other/stalker/${addonId}/build/gamedata`
//     await fs.mkdir(mo2Folder, { recursive: true })
//     await fs.cp(sourceFolder, mo2Folder, { recursive: true })
//   } catch (error) {
//     console.error('Error', error)
//   }
// }

// await transpile()
// console.log(c.green('\nTS to Lua transpiled'))
// await createAllTextFiles()
// console.log(c.green('Translations were created'))
// await updateAddonInMo2()
// console.log(c.cyan('Addon has been updated in MO2\n'))

// =======================

const someTextFile = {
  prop1: '...',
  // prop2: '...',
  // prop3: '...',
}

await pack({
  build: {
    outName: addonId + '_build',
  },
  extends: {},
  config: {
    languages: ['eng', 'rus'] as const,
    translations: (t) => [
      t.pack<keyof typeof someTextFile>({
        translations: {
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
        translations: {
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
  scripts: [
    { fileName: 'ass_script', outFileName: addonId + '_ass' },
    { fileName: 'lol_kek', outFileName: addonId + '_ya_zaebalisya' },
  ],
})
