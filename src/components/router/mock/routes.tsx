import { BlogPage, Homepage } from '@/pages'
import { NotFoundPage } from '@/pages/404/NotFound'
import { RouteObject } from 'react-router-dom'

export const routes: RouteObject[] = [
  { index: true, element: <Homepage />, errorElement: <NotFoundPage /> },
  { path: ':id', element: <BlogPage />, errorElement: <NotFoundPage /> }
]
