import { fetchBlogs } from '@/redux/actions'
import { createReducer } from '@reduxjs/toolkit'
import { BlogReducer } from './types/initial-value'

const initialValue: BlogReducer = {
  blogs: [],
  meta: null,
  isLoading: true
}

export const blogReducer = createReducer(initialValue, (builder) => {
  builder.addCase(fetchBlogs.fulfilled, (state, action) => {
    const { blogs, meta } = action.payload
    state.blogs = blogs
    state.meta = meta
  })
})
