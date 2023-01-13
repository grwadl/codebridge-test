import { useDebounce } from '@/hooks'
import { useFirstRender } from '@/hooks/useFirstRender'
import { blogParams } from '@/lib/services/params'
import { BlogSearchParams } from '@/lib/services/params/blog-params/types'
import { fetchBlogs, useTypedDispatch } from '@/redux'
import { InputLabel } from '@mui/material'
import React, { useState } from 'react'
import SearchInput from '../UI/input-base/SearchInput'
import { inputStyles, labelStyles } from './mock/inline-styles'

const SearchBar = () => {
  const [searchValue, setSearchValue] = useState(() => blogParams.getSearchedBlogsQuery())
  const dispatch = useTypedDispatch()
  const isFirstRender = useFirstRender()

  const onChangeSearchValue = (e: React.ChangeEvent<HTMLInputElement>): void => setSearchValue(e.target.value)

  const debouncedFunc = (): void => {
    const newParams = blogParams.generateSearchTitleAndDescription(searchValue)
    blogParams.replaceWindowSearch<BlogSearchParams | null>(newParams)
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
