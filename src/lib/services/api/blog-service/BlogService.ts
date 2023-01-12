import { getRequest } from '@/lib/utils/'
import { BaseService } from '../BaseService'
import { Blog } from './types/blog'

class BlogService extends BaseService<Blog> {
  baseUrl = import.meta.env.VITE_BLOG_API_BASE_URL

  async getOne(id: number): Promise<Blog> {
    return getRequest<Blog>(`${this.baseUrl}/${id}`)
  }

  async get(opt?: Record<string, string>, query?: Record<string, string>): Promise<Blog[]> {
    if (!query) return getRequest<Blog[]>(`${this.baseUrl}/articles/100`, opt)

    const url = new URL(this.baseUrl)

    Object.entries(query).forEach(([key, value]) => url.searchParams.append(key, value))
    return getRequest<Blog[]>(url, opt)
  }
}

export const blogService = new BlogService()
