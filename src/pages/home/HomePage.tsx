import { CardList } from '@/components/card/'
import { fetchBlogs, useTypedDispatch, useTypedSelector } from '@/redux'
import { useEffect } from 'react'

const Homepage = () => {
  const dispatch = useTypedDispatch()
  const { blogs } = useTypedSelector(({ blog }) => blog)

  useEffect(() => {
    dispatch(fetchBlogs(''))
  }, [])

  return (
    <div>
      <CardList blogs={blogs} />
    </div>
  )
}

export { Homepage }
