import { useTypedSelector } from '@/redux'
import { Hr } from '../UI/hr/Hr'
import './blogs-count.scss'

const BlogCount = () => {
  const { blogs } = useTypedSelector((state) => state.blog)

  return (
    <div className="blogs-count">
      <h3 className="blogs-count-text">Results: {blogs?.length ?? 0}</h3>
      <Hr />
    </div>
  )
}

export { BlogCount }
