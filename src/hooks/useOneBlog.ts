import { closeBlogPage, fetchOneBlog, useTypedDispatch } from '@/redux'
import { useEffect } from 'react'

export const useOneBlog = (id?: string) => {
  const dispatch = useTypedDispatch()
  useEffect(() => {
    if (!id) return

    dispatch(fetchOneBlog(id))
    return () => {
      dispatch(closeBlogPage())
    }
  }, [id])
}
