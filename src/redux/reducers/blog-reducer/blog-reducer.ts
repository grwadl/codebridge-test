import { blogParams } from '@/lib/services/params/blog-params/blog-params'
import { changeQueryAction, fetchBlogs } from '@/redux/actions'
import { createReducer } from '@reduxjs/toolkit'
import { BlogReducer } from './types/initial-value'

const initialValue: BlogReducer = {
  blogs: [],
  searchedValue: blogParams.getSearchedBlogsQuery(),
  isLoading: true
}

export const blogReducer = createReducer(initialValue, (builder) => {
  builder.addCase(fetchBlogs.pending, (state) => {
    state.isLoading = true
  })

  builder.addCase(fetchBlogs.rejected, (state) => {
    state.isLoading = false
  })

  builder.addCase(changeQueryAction, (state, action) => {
    state.searchedValue = action.payload
    state.isLoading = true
  })

  builder.addCase(fetchBlogs.fulfilled, (state, action) => {
    const { blogs, searchedValue } = action.payload
    state.blogs = blogs
    state.searchedValue = searchedValue
    state.isLoading = false
  })
})
