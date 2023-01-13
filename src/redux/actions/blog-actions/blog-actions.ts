import { Blog, blogService } from '@/lib/services/api'
import { cached } from '@/lib/utils'
import { AsyncThunkConfig } from '@/redux/types'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { BlogActions } from './types/blog-action.enum'
import { ThunkFetchBlogsReturnType } from './types/return-type'

const cachedFetchBlogs = cached<Blog[]>()

export const fetchBlogs = createAsyncThunk<ThunkFetchBlogsReturnType, string, AsyncThunkConfig>(
  BlogActions.GET_BLOGS,
  async (search) => {
    const blogs = await cachedFetchBlogs(() => blogService.get({}, { _contains: search }), search)

    return { blogs }
  }
)
