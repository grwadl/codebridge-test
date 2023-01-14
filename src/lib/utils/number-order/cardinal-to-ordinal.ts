import { Ordinal } from './types/ordinal.enum'

export const cardinalToOrdinalNumber = (cardinal: string): string => {
  if (!cardinal) return ''

  const lastNumber = String(cardinal).charAt(cardinal.length - 1)
  const firstNumber = String(cardinal).charAt(0)

  const teenth = String(cardinal).length === 2 && firstNumber === '1'

  if (teenth) return cardinal + 'th'

  if (!(lastNumber in Ordinal)) return cardinal + 'th'

  return cardinal + Ordinal[+lastNumber as keyof typeof Ordinal]
}
