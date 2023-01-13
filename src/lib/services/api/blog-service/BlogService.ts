import { getRequest } from '@/lib/utils/'
import { BlogFetchResponse } from '@/redux'
import { BaseService } from '../BaseService'
import { Blog } from './types/blog'

class BlogService extends BaseService<Blog> {
  baseUrl = import.meta.env.VITE_BLOG_API_BASE_URL

  async getOne(id: number): Promise<Blog> {
    return getRequest<Blog>(`${this.baseUrl}/${id}`)
  }

  async get(opt?: Record<string, string>, query?: Record<string, string>): Promise<BlogFetchResponse> {
    const url = new URL(this.baseUrl)
    url.searchParams.append('api_token', import.meta.env.VITE_BLOG_API_TOKEN)
    url.searchParams.append('search', 'IT companies expected')
    if (!query) return getRequest<BlogFetchResponse>(url, opt)

    Object.entries(query).forEach(([key, value]) => url.searchParams.append(key, value))
    return getRequest<BlogFetchResponse>(url, opt)
  }
}

export const blogService = new BlogService()
