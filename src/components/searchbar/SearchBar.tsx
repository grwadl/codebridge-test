import { useDebounce } from '@/hooks'
import { useFirstRender } from '@/hooks/useFirstRender'
import { searchParams } from '@/lib/services/params'
import { useTypedDispatch } from '@/redux'
import { changeQueryAction } from '@/redux/actions/query-actions'
import { InputLabel } from '@mui/material'
import React, { useState } from 'react'
import SearchInput from '../UI/input-base/SearchInput'
import { inputStyles, labelStyles } from './mock/inline-styles'

const SearchBar = () => {
  const [searchValue, setSearchValue] = useState(() => searchParams.getOne('title_contains'))
  const dispatch = useTypedDispatch()
  const isFirstRender = useFirstRender()

  const onChangeSearchValue = (e: React.ChangeEvent<HTMLInputElement>): void => setSearchValue(e.target.value)

  useDebounce(() => !isFirstRender && dispatch(changeQueryAction(searchValue)), [searchValue], 300)

  return (
    <header className="header">
      <InputLabel style={labelStyles} htmlFor="search-input">
        Filter by keywords
      </InputLabel>
      <SearchInput value={searchValue} onChange={onChangeSearchValue} style={inputStyles} id="search-input" />
    </header>
  )
}

export { SearchBar }
