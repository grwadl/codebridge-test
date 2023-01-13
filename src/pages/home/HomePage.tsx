import { fetchBlogs, useTypedDispatch } from '@/redux'
import { useEffect } from 'react'

const Homepage = () => {
  const dispatch = useTypedDispatch()

  useEffect(() => {
    dispatch(fetchBlogs())
  }, [])

  return <div>Homepage</div>
}

export { Homepage }
