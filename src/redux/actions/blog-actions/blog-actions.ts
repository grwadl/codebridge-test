import { Blog, blogService } from '@/lib/services/api'
import { blogParams } from '@/lib/services/params'
import { cached } from '@/lib/utils'
import { AsyncThunkConfig } from '@/redux/types'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { changeOrder } from './helpers'
import { BlogActions } from './types/blog-action.enum'
import { ThunkFetchBlogsReturnType } from './types/return-type'

const cachedFetchBlogs = cached<Blog[]>()

const fetchBlogs = createAsyncThunk<ThunkFetchBlogsReturnType, string, AsyncThunkConfig>(
  BlogActions.GET_BLOGS,
  async (searchedValue) => {
    const params = blogParams.generateSearchTitleAndDescription(searchedValue) ?? undefined

    const fetchedBlogs = await cachedFetchBlogs(
      () => blogService.get({}, params).then((blogs) => changeOrder({ blogs, searchedValue })),
      searchedValue
    )

    return { blogs: fetchedBlogs, searchedValue }
  }
)

export { fetchBlogs }
