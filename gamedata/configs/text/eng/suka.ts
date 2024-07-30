import { FileExtension, Texts } from '@/index'

export const extension: FileExtension = 'ltx'

export default function (t: Texts) {
  // const char = t.specificCharacter({
  //   id: 'hunter_gar_trader',
  //   team_default: true,
  //   name: 'hunter_gar_trader_name',
  //   icon: 'ui_inGame2_bandit_4',
  //   map_icon: {
  //     x: 1,
  //     y: 0,
  //   },
  //   bio: 'No information is available.',
  //   class: 'hunter_gar_trader',
  //   community: 'trader',
  //   snd_config: 'characters_voice/human/stalker_3/',
  //   rank: 5800,
  //   money: {
  //     min: 90000000,
  //     max: 90000000,
  //     infinitive: true,
  //   },
  //   reputation: 1700,
  //   visual: 'actors/neytral/stalker_plash_1',
  //   supplies: {
  //     items: {
  //       wpn_beretta: 1,
  //       ammo_12x70_buck: 2,
  //     },
  //     include: [
  //       //
  //       'gameplay/supplies/character_items.xml',
  //       'gameplay/supplies/character_food.xml',
  //       'gameplay/supplies/character_drugs.xml',
  //     ],
  //   },
  //   dialogs: [
  //     'dm_init_trader',
  //     'hunter_trader_meet',
  //     'dm_ordered_task_dialog',
  //     'dm_ordered_task_completed_dialog',
  //     'about_baraholka_hunter_trader',
  //     'dm_lifestyle',
  //     'actor_break_dialog',
  //   ],
  //   include: ['gameplaycharacter_criticals.xml'],
  // })

  // const dialog = t.dialog({
  //   id: 'ecolog_companion_task_2_dialog',
  //   phrases: [
  //     {
  //       id: 0,
  //       text: '',
  //       next: [1],
  //     },
  //     {
  //       id: 1,
  //       text: '',
  //       next: [111, 112, 113],
  //     },
  //     {
  //       id: 111,
  //       text: 'ecolog_companion_task_1_start_dialog_1',
  //       dont_has_info: 'ecolog_companion_task_2_started',
  //       precondition: 'dialogs_jupiter.ecolog_companion_task_2_not_complete',
  //       give_info: 'ecolog_companion_task_2_started',
  //       next: [1111],
  //     },
  //     {
  //       id: 112,
  //       text: 'ecolog_companion_task_1_start_dialog_2',
  //       has_info: 'ecolog_companion_task_2_started',
  //       precondition: 'dialogs_jupiter.ecolog_companion_task_2_not_complete',
  //       give_info: 'ecolog_companion_task_2_started',
  //       next: [1111],
  //     },
  //     {
  //       id: 113,
  //       text: 'ecolog_companion_task_1_complete',
  //       precondition: 'dialogs_jupiter.ecolog_companion_task_2_complete',
  //       next: [1113],
  //     },
  //     {
  //       id: 1111,
  //       text: 'ecolog_companion_task_1_actor_reply',
  //     },
  //     {
  //       id: 1113,
  //       text: 'ecolog_companion_task_1_actor_reply',
  //       action: 'dialogs_jupiter.ecolog_companion_task_2_complete_task',
  //     },
  //   ],
  // })

  const bootsLtx = t.ltx({
    section: 'mecheni_boots_dicks',
    entries: {
      length: 10 * 20,
      owner: null,
      color: '#ff224d',
      stink: true,
    },
  })

  const innaDltx = t.dltx.remove({
    sectionName: 'sosi',
  })

  type ThatOneNpcLtx = {
    health: number
    items: string[]
  }

  const testDxml = t.dltx.override<ThatOneNpcLtx>({
    sectionName: 'zaur_dolg_12',
    _with: ['!dolg_npc_level_1'],
    entries: {
      '>items': 'kirieshka',
    },
  })

  return [testDxml, bootsLtx, innaDltx, t.include('presets\\environment_underground_more.ltx')].join('\n')
}
