import { Blog } from '@/lib/services/api/'

export interface BlogReducer {
  blogs: Blog[]
  isLoading: boolean
}
