import { Ordinal } from './types/ordinal.enum'

export const cardinalToOrdinalNumber = (cardinal: string): string => {
  if (!cardinal) return ''

  const lastNumber = String(cardinal).charAt(cardinal.length - 1)
  if (!(lastNumber in Ordinal)) return lastNumber + 'th'

  return lastNumber + Ordinal[+lastNumber as keyof typeof Ordinal]
}
