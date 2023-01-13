import { getRequest } from '@/lib/utils/'
import { searchParams } from '../../params/search-params'
import { BaseService } from '../BaseService'
import { Blog } from './types/blog'

class BlogService extends BaseService<Blog> {
  baseUrl = import.meta.env.VITE_BLOG_API_BASE_URL

  async getOne(id: number): Promise<Blog> {
    return getRequest<Blog>(`${this.baseUrl}/${id}`)
  }

  async get(opt?: Record<string, string>, query?: Record<string, string>): Promise<Blog[]> {
    const url = new URL(this.baseUrl + '/blogs')
    const params = searchParams.parseParams(query)
    if (params) url.search = '?' + params

    return getRequest<Blog[]>(url, opt)
  }
}

export const blogService = new BlogService()
