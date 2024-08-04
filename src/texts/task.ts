// TODO

type JsonTaskStructure = {}

export type Task = {
  /** Title in the PDA */
  title: string
  /** First objective in the list is considered main */
  objective: {
    text: string
    icon: string
    infoportion_set_complete?: string
    infoportion_complete?: string
    infoportion_fail?: string
    function_complete?: string
    function_fail?: string
    article?: string
  }[]
}

// export function task({})
