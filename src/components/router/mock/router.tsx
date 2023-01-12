import { Layout } from '@/components/layout/Layout'
import { NotFound } from '@/pages/404/NotFound'
import { createBrowserRouter } from 'react-router-dom'
import { routes } from './routes'

//i'm using the newest version of the router - 6.4
export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [...routes],
    errorElement: <NotFound />
  }
])
