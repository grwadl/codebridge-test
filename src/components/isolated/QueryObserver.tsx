import { useFetchBlogsOnChangedQuery } from '@/hooks/useFetchBlogsOnChangedQuery'

const QueryObserver = () => {
  useFetchBlogsOnChangedQuery() //made this to prevent extra call of the query reducer instead of wrapping components in memo()
  return null
}

export { QueryObserver }
