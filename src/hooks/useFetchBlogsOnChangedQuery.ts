import { searchParams } from '@/lib/services/params'
import { fetchBlogs, useTypedDispatch, useTypedSelector } from '@/redux'
import { useEffect } from 'react'

export const useFetchBlogsOnChangedQuery = () => {
  const dispatch = useTypedDispatch()
  const { query } = useTypedSelector((state) => state.query)

  useEffect(() => {
    const newSearchParams = searchParams.parseParams({ title_contains: query, summary_contains: query })
    history.replaceState(null, '', `${location.origin}${newSearchParams ? '?' + newSearchParams : ''}`)
    dispatch(fetchBlogs(query))
  }, [query])
}
