/** @noSelfInFile */

declare namespace news_manager {
  /**
   * Give or remove money from actor depending on `type`
   * @param actor unused
   */
  export function relocate_money(actor: null, type: 'in' | 'out', sum: number): void
}
