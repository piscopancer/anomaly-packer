export function objectEntries<O extends object>(obj: O) {
  return Object.entries(obj) as [keyof O, O[keyof O]][]
}

export type StrictOmit<T extends { [K in keyof object]: unknown }, K extends keyof T> = Omit<T, K>

export type SplitObject<T extends object> = {
  [K in keyof T]: { [P in K]: T[K] }
}[keyof T]

export type ArrayToValue<A> = A extends Array<infer V> ? V : A

export function filterObject<O extends object, P extends Partial<Record<keyof O, true> | Record<keyof O, false>>>(
  obj: O,
  props: P
): P[keyof P] extends true ? Pick<O, Extract<keyof O, keyof P>> : Omit<O, keyof P> {
  const propsEntries = objectEntries(props)
  let newObj: Record<any, any> = {}
  const excludeMode = propsEntries.some(([_, v]) => v === false)
  if (excludeMode) {
    newObj = { ...obj }
  }
  for (const [k, _] of propsEntries) {
    if (excludeMode) {
      delete newObj[k]
    } else {
      newObj[k] = obj[k as keyof O]
    }
  }
  return newObj as any
}

export function splitObject<O extends object>(obj: O) {
  return objectEntries(obj).map(([k, v]) => ({ [k]: v })) as Record<keyof O, O[keyof O]>[]
}
