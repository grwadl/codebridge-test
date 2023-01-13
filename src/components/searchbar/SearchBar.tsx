import { useDebounce } from '@/hooks'
import { useFirstRender } from '@/hooks/useFirstRender'
import { searchParams } from '@/lib/services/params'
import { fetchBlogs, useTypedDispatch } from '@/redux'
import { InputLabel } from '@mui/material'
import React, { useState } from 'react'
import SearchInput from '../UI/input-base/SearchInput'
import { inputStyles, labelStyles } from './mock/inline-styles'

const SearchBar = () => {
  const [searchValue, setSearchValue] = useState(() => searchParams.getOne('title_contains'))
  const dispatch = useTypedDispatch()
  const isFirstRender = useFirstRender()

  const onChangeSearchValue = (e: React.ChangeEvent<HTMLInputElement>): void => setSearchValue(e.target.value)

  const debouncedFunc = (): void => {
    searchParams.replaceWindowParams({ title_contains: searchValue, summary_contains: searchValue })
    dispatch(fetchBlogs(searchValue))
  }

  useDebounce(debouncedFunc, [searchValue], isFirstRender ? 0 : 300)

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
