import { CardList } from '@/components/card/'
import { QueryObserver } from '@/components/isolated/QueryObserver'
import { SearchBar } from '@/components/searchbar/SearchBar'

const Homepage = () => {
  return (
    <div>
      <QueryObserver />
      <SearchBar />
      <CardList />
    </div>
  )
}

export { Homepage }
