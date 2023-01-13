import { Blog } from '@/lib/services/api/'
import { Meta } from './meta'

export interface BlogReducer {
  blogs: Blog[]
  meta: Meta | null
  isLoading: boolean
}
