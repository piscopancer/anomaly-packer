/** @noSelfInFile */

import type { Section } from 'anomaly-packer'

declare global {
  namespace trans_outfit {
    export function ReadOutfitBlindnessKoeff(section: Section.Item): number
    export function timer_trans(): void
    export function transparent_gg(): void
  }
}
