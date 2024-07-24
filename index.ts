import { pack } from './pack'
import { addonId } from './src/util'

const outName = addonId + '_build'

await pack({
  build: {
    outDirName: outName,
  },
  scripts: [
    {
      sourceFileName: 'main',
      buildFileName: addonId + '_main',
    },
    {
      sourceFileName: 'mcm',
      buildFileName: 'BIG_ASS_MCM',
    },
  ],
  sourceGamedata: 'C:/Games (Files)/Anomaly 1.5.2/gamedata',
  refresh: [`C:/Users/Igor/AppData/Local/ModOrganizer/STALKER Anomaly/mods/${outName}/gamedata`],
})
