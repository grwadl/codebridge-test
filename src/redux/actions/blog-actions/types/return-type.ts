import { Blog } from '@/lib/services/api'

export type ThunkFetchBlogsReturnType = {
  blogs: Blog[]
  searchedValue: string
}
