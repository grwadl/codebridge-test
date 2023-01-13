import { searchParams } from '@/lib/services/params'
import { fetchBlogs, useTypedDispatch, useTypedSelector } from '@/redux'
import { useEffect } from 'react'

export const useFetchBlogsOnChangedQuery = () => {
  const dispatch = useTypedDispatch()
  const { searchedValue } = useTypedSelector((state) => state.blog)

  useEffect(() => {
    searchParams.replaceWindowParams({ title_contains: searchedValue, summary_contains: searchedValue })
    dispatch(fetchBlogs(searchedValue))
  }, [searchedValue])
}
