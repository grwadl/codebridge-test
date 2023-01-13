import { useFetchBlogsOnChangedQuery } from '@/hooks/useFetchBlogsOnChangedQuery'

//made this component instead of wrapping components in memo() to prevent extra call of the query reducer
const QueryObserver = () => {
  useFetchBlogsOnChangedQuery()
  return null
}

export { QueryObserver }
