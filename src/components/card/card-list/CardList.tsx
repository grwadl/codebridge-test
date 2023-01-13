import { useTypedSelector } from '@/redux'
import { Card } from '../card/Card'
import './card-list.scss'

const CardList = () => {
  const { blogs, isLoading, searchedValue } = useTypedSelector((state) => state.blog)

  return (
    <ul className="blog-list">
      {blogs?.map((blog) => (
        <Card search={searchedValue} key={blog.id} {...blog} />
      ))}
    </ul>
  )
}

export { CardList }
