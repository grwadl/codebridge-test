class SearchParams {
  getAll<T extends Record<string, string>>(URL = window.location): T {
    const urlSearchParams = new URLSearchParams(URL.search)
    return Object.fromEntries(urlSearchParams.entries()) as T
  }

  getOne(param: string, URL = window.location): string {
    const urlSearchParams = new URLSearchParams(URL.search)
    return urlSearchParams.get(param) ?? ''
  }

  parseParams<T extends Record<string, unknown>>(params?: T): string {
    if (!params || !Object.keys(params).length) return ''
    const urlParams = new URLSearchParams()
    Object.entries(params).forEach(([key, value]) => value && urlParams.append(key, String(value)))
    return urlParams.toString()
  }

  replaceWindowParams<T extends Record<string, unknown>>(params: T): void {
    const newSearchParams = this.parseParams(params)
    history.replaceState(null, '', `${location.origin}${newSearchParams ? '?' + newSearchParams : ''}`)
  }
}

export const searchParams = new SearchParams()
