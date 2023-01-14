import { Loader } from '@/components/UI/loader/Loader'
import { NotFound } from '@/components/not-found/NotFound'
import { useTypedSelector } from '@/redux'
import { Card } from '../card/Card'
import './card-list.scss'

const CardList = () => {
  const { blogs, isLoading, searchedValue } = useTypedSelector((state) => state.blog)

  if (!isLoading && !blogs.length)
    return <NotFound className="not-found-blogs" desc="Sorry, but i can't find any related blogs..." />

  return (
    <ul className="blog-list">
      {isLoading ? <Loader /> : blogs?.map((blog) => <Card search={searchedValue} key={blog.id} {...blog} />)}
    </ul>
  )
}

export { CardList }
