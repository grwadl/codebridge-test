import { fetchBlogs } from '@/redux/actions'
import { createReducer } from '@reduxjs/toolkit'
import { BlogReducer } from './types/initial-value'

const initialValue: BlogReducer = {
  blogs: [],
  isLoading: true
}

export const blogReducer = createReducer(initialValue, (builder) => {
  builder.addCase(fetchBlogs.fulfilled, (state, action) => {
    const { blogs } = action.payload
    state.blogs = blogs
  })
})
