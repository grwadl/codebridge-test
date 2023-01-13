import { Blog } from '@/lib/services/api'
import { Card } from '../card/Card'
import './card-list.scss'

type Props = {
  blogs: Blog[]
}

const CardList = ({ blogs }: Props) => {
  return (
    <ul className="blog-list">
      {blogs?.map((blog) => (
        <Card {...blog} />
      ))}
    </ul>
  )
}

export { CardList }
