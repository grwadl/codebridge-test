import { ThunkFetchBlogsReturnType } from '@/redux'
import { filterToMatchInSummary, filterToMatchInTitle } from './filter'

export const changeOrder = ({ blogs, searchedValue }: ThunkFetchBlogsReturnType) => {
  if (searchedValue === '' || !blogs.length) return blogs

  const filteredBlogsWithMatchInTitle = blogs.filter((blog) => filterToMatchInTitle(blog, searchedValue))

  const filteredBlogsWithMatchInSummary = blogs.filter(
    (blog) => !filterToMatchInTitle(blog, searchedValue) && filterToMatchInSummary(blog, searchedValue)
  )

  return [...filteredBlogsWithMatchInTitle, ...filteredBlogsWithMatchInSummary]
}
