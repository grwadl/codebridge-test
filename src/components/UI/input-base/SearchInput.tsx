import SearchIcon from '@mui/icons-material/Search'
import { InputAdornment, InputProps, OutlinedInput } from '@mui/material'

const SearchInput = (props: InputProps) => {
  return (
    <OutlinedInput
      margin="none"
      type="search"
      placeholder="The most successful IT companies in 2020"
      size="medium"
      inputProps={{ style: { padding: '13px 20px', fontSize: 16, color: '#363636' } }}
      startAdornment={
        <InputAdornment position="start">
          <SearchIcon />
        </InputAdornment>
      }
      {...props}
    />
  )
}

export default SearchInput
