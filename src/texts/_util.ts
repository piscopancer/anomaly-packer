export function toXmlStructure<N extends string, V extends string | number>(tagName: N, value?: V | V[]) {
  if (value === undefined) return []
  return Array.isArray(value)
    ? value.map((v) => ({
        [tagName]: v,
      }))
    : [
        {
          [tagName]: value,
        },
      ]
}
