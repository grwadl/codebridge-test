import { BlogCount } from '@/components/blog-count/BlogCount'
import { CardList } from '@/components/card/'
import { SearchBar } from '@/components/searchbar/SearchBar'
import './homepage.scss'

const Homepage = () => {
  return (
    <div className="padded-section homepage">
      <SearchBar />
      <BlogCount />
      <CardList />
    </div>
  )
}

export { Homepage }
