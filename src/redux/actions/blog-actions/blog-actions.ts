import { Blog, blogService } from '@/lib/services/api'
import { cached } from '@/lib/utils'
import { AsyncThunkConfig } from '@/redux/types'
import { createAction, createAsyncThunk } from '@reduxjs/toolkit'
import { ChangeQueryAction } from './types'
import { BlogActions } from './types/blog-action.enum'
import { ThunkFetchBlogsReturnType } from './types/return-type'

const cachedFetchBlogs = cached<Blog[]>()

const fetchBlogs = createAsyncThunk<ThunkFetchBlogsReturnType, string, AsyncThunkConfig>(
  BlogActions.GET_BLOGS,
  async (searchedValue) => {
    const params = { title_contains: searchedValue, summary_contains: searchedValue }

    const blogs = await cachedFetchBlogs(() => blogService.get({}, params), searchedValue)

    return { blogs, searchedValue }
  }
)

const changeQueryAction = createAction<ChangeQueryAction>(BlogActions.CHANGE_QUERY, (query) => {
  return { payload: query }
})

export { changeQueryAction, fetchBlogs }
