import * as qs from 'qs'

class QueryParser {
  stringify<T extends Record<string, unknown>>(params?: T): string {
    if (!params || !Object.keys(params).length) return ''

    return qs.stringify(params)
  }

  parse<T extends Record<string, unknown>>(params: string): T | null {
    if (!params) return null
    return qs.parse(params) as T
  }
}

export const queryParser = new QueryParser()
