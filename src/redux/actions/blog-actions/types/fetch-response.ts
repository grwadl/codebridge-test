import { Blog } from '@/lib/services/api'
import { Meta } from '@/redux/reducers'

export interface BlogFetchResponse {
  data: Blog[]
  meta: Meta
}
