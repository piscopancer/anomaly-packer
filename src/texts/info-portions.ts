import { objectEntries } from '@/util'
import { buildXml, element, field } from './_xml'
import { Task } from './task'

type Location = {
  level: number
  x: number
  y: number
  icon: {
    name: string
    x: number
    y: number
    width: number
    height: number
  }
  text: string
}

type InfoPortions<Id extends string = string> = Record<
  Id,
  {
    action?: string | string[]
    article?: string | string[]
    dialog?: string | string[]
    actor_dialog?: string | string[]
    disable?: string | string[]
    location?: Location | Location[]
    task?: Task | Task[]
  } | null
>

type PortionEntry = keyof NonNullable<InfoPortions[keyof InfoPortions]>

export function infoPortions<Id extends string>(portions: InfoPortions<Id>): string {
  return buildXml([
    element(
      'game_information_portions',
      undefined,
      objectEntries(portions).map(([id, pe]) =>
        element('info_portion', { id: id as string }, pe
          ? [
              ...field('action' satisfies PortionEntry, pe.action),
              ...field('actor_dialog' satisfies PortionEntry, pe.actor_dialog),
              ...field('article' satisfies PortionEntry, pe.article),
              ...field('dialog' satisfies PortionEntry, pe.dialog),
              ...field('disable' satisfies PortionEntry, pe.disable),
              // TODO: location, task
            ]
          : [])
      )
    ),
  ])
}
