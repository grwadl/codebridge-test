import { Blog } from '@/lib/services/api'

const filterToMatchInTitle = (blog: Blog, searchedValue: string) =>
  blog.title.toLowerCase().includes(searchedValue.toLowerCase())

const filterToMatchInSummary = (blog: Blog, searchedValue: string) =>
  blog.summary.toLowerCase().includes(searchedValue.toLowerCase())

export { filterToMatchInSummary, filterToMatchInTitle }
