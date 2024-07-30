export function objectEntries<O extends object>(obj: O) {
  return Object.entries(obj ?? {}) as [keyof O, O[keyof O]][]
}

export type StrictOmit<T extends { [K in keyof object]: unknown }, K extends keyof T> = Omit<T, K>

export type SlashedObject<T extends object> = {
  [K in keyof T]: { [P in K]: T[K] }
}[keyof T]
