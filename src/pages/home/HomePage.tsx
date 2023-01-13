import { CardList } from '@/components/card/'
import Header from '@/components/header/Header'
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
      <Header />
      <CardList blogs={blogs} />
    </div>
  )
}

export { Homepage }
