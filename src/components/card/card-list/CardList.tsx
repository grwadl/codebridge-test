import { useTypedSelector } from '@/redux'
import { Card } from '../card/Card'
import './card-list.scss'

const CardList = () => {
  const { blogs, isLoading, searchedValue } = useTypedSelector((state) => state.blog)

  if (isLoading) return <div>Loading...</div>

  return (
    <ul className="blog-list">
      {blogs?.map((blog) => (
        <Card key={blog.id} {...blog} />
      ))}
    </ul>
  )
}

export { CardList }
