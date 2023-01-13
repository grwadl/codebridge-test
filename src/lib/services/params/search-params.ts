import { queryParser } from '../query-parser'

export class SearchParams {
  getAll<T extends Record<string, unknown>>(URL = window.location): T {
    const params = queryParser.parse(URL.search)

    return params as T
  }

  replaceWindowSearch<T extends Record<string, unknown> | null>(params: T): void {
    const newSearchParams = params ? '?' + queryParser.stringify(params) : ''
    history.replaceState(null, '', `${location.origin}${newSearchParams}`)
  }
}

export const searchParams = new SearchParams()
