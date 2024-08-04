import { objectEntries } from '@/util'
import json2xml from 'json2xml'
import { toXmlStructure } from './_util'
import { Task } from './task'

type JsonInfoPortions = {
  game_information_portions: {
    attrs: { id: string }
    info_portion: Record<string, any>[]
  }[]
}

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
  const json: JsonInfoPortions = {
    game_information_portions: objectEntries(portions).map(([id, pe]) => ({
      attrs: {
        id,
      },
      info_portion: pe
        ? [
            ...toXmlStructure('action' satisfies PortionEntry, pe.action),
            ...toXmlStructure('actor_dialog' satisfies PortionEntry, pe.actor_dialog),
            ...toXmlStructure('article' satisfies PortionEntry, pe.article),
            ...toXmlStructure('dialog' satisfies PortionEntry, pe.dialog),
            ...toXmlStructure('disable' satisfies PortionEntry, pe.disable),
            // TODO
            // location
            // task
          ]
        : [],
    })),
  }
  const xml = json2xml(json, { attributes_key: 'attrs' })
  return xml
}
