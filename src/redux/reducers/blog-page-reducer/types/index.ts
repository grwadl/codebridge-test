import { Blog } from '@/lib/services/api'

export type BlogPageInitialState = {
  openedBlog: Blog | null
  isLoading: boolean
}
