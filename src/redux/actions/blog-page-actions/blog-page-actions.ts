import { Blog, blogService } from '@/lib/services/api'
import { cached } from '@/lib/utils'
import { AsyncThunkConfig } from '@/redux/types'
import { createAction, createAsyncThunk } from '@reduxjs/toolkit'
import { BlogPageAction, ThunkFetchOneBlogReturnType } from './types'

const cachedFetchOneBlog = cached<Blog>()

const fetchOneBlog = createAsyncThunk<ThunkFetchOneBlogReturnType, string, AsyncThunkConfig>(
  BlogPageAction.GET_ONE_BLOG,
  async (id: string) => {
    const blog = await cachedFetchOneBlog(() => blogService.getOne(+id), id)

    return { blog }
  }
)

const closeBlogPage = createAction<void>(BlogPageAction.CLOSE_BLOG)

export { fetchOneBlog, closeBlogPage }
