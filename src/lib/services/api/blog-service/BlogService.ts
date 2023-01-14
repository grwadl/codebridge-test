import { queryParser } from '@/lib/services/query-parser'
import { getRequest } from '@/lib/utils/'
import { BlogSearchParams } from '../../params/blog-params/types'
import { BaseService } from '../BaseService'
import { Blog } from './types/blog'

class BlogService extends BaseService<Blog> {
  baseUrl = import.meta.env.VITE_BLOG_API_BASE_URL ?? 'https://api.spaceflightnewsapi.net/v3'

  async getOne(id: number): Promise<Blog> {
    return getRequest<Blog>(`${this.baseUrl}/blogs/${id}`)
  }

  async get(opt?: RequestInit, query?: BlogSearchParams): Promise<Blog[]> {
    const url = new URL(this.baseUrl + '/blogs')
    const params = query ? queryParser.stringify(query) : null
    if (params) url.search = '?' + params

    return getRequest<Blog[]>(url, opt)
  }
}

export const blogService = new BlogService()
