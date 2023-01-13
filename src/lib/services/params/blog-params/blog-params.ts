import { SearchParams } from '../search-params'
import { BlogSearchParams } from './types'

class BlogParams extends SearchParams {
  getSearchedBlogsQuery(): string {
    const allParams = this.getAll<BlogSearchParams>()
    if (!allParams) return ''

    const firstQuery = allParams?._where?._or?.[0]

    return firstQuery?.summary_contains ?? firstQuery?.title_contains ?? ''
  }

  generateSearchTitleAndDescription(searchValue: string): BlogSearchParams | null {
    const newParams = searchValue
      ? { _where: { _or: [{ title_contains: searchValue }, { summary_contains: searchValue }] } }
      : null

    return newParams
  }
}

export const blogParams = new BlogParams()
