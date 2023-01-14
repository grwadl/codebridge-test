import { BlogPage, Homepage } from '@/pages'
import { NotFound } from '@/pages/404/NotFound'
import { RouteObject } from 'react-router-dom'

export const routes: RouteObject[] = [
  { index: true, element: <Homepage />, errorElement: <NotFound /> },
  { path: ':id', element: <BlogPage />, errorElement: <NotFound /> }
]
