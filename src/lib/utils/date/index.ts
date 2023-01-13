import { cardinalToOrdinalNumber } from '../number-order/cardinal-to-ordinal'

export const ISOdateToHumanReadable = (dateISO: string): string => {
  if (!dateISO) return ''

  const date = new Date(dateISO).toLocaleString('en-GB', { dateStyle: 'long' })
  const [day, month, year] = date.split(' ')

  return `${month} ${cardinalToOrdinalNumber(day)}, ${year}`
}
