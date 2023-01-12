import { InputLabel } from '@mui/material'
import SearchInput from '../UI/input-base/SearchInput'

const labelStyles = { marginBottom: 10, fontWeight: 600, color: '#363636' }
const inputStyles = { width: '100%', maxWidth: '600px' }

const Header = () => {
  return (
    <header className="header">
      <InputLabel style={labelStyles} htmlFor="search-input">
        Filter by keywords
      </InputLabel>
      <SearchInput style={inputStyles} id="search-input" />
    </header>
  )
}

export default Header
