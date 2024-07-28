/** @noSelfInFile */

declare namespace bind_campfire {
  const campfires_all: Record<
    string,
    {
      campfire?: {
        is_on(): boolean
      }
      object: CGameObject
    }
  >
}
