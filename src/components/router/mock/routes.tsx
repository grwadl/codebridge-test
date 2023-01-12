import { BlogPage, Homepage } from '@/pages'
import { RouteObject } from 'react-router-dom'

export const routes: RouteObject[] = [
  { index: true, element: <Homepage /> },
  { path: ':id', element: <BlogPage /> }
]
