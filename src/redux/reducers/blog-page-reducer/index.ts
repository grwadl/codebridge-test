import { closeBlogPage, fetchOneBlog } from '@/redux/actions/'
import { createReducer, isAnyOf } from '@reduxjs/toolkit'
import { BlogPageInitialState } from './types'

const blogPageInitialState: BlogPageInitialState = {
  isLoading: true,
  openedBlog: null
}

export const blogPageReducer = createReducer(blogPageInitialState, (builder) => {
  builder.addCase(fetchOneBlog.fulfilled, (state, action) => {
    const { blog } = action.payload
    state.openedBlog = blog
    state.isLoading = false
  })

  builder.addCase(fetchOneBlog.pending, (state) => {
    state.isLoading = true
  })

  builder.addMatcher(isAnyOf(fetchOneBlog.rejected, closeBlogPage), (state) => {
    state.isLoading = false
  })
})
