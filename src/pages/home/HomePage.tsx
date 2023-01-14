import { BlogCount } from '@/components/blog-count/BlogCount'
import { CardList } from '@/components/card/'
import { SearchBar } from '@/components/searchbar/SearchBar'

const Homepage = () => {
  return (
    <>
      <SearchBar />
      <BlogCount />
      <CardList />
    </>
  )
}

export { Homepage }
