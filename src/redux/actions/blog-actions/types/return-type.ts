import { Blog } from '@/lib/services/api'
import { Meta } from '@/redux/reducers'

export type ThunkFetchBlogsReturnType = {
  blogs: Blog[]
  meta: Meta
}
