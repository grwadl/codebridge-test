import { RouterProvider } from 'react-router-dom'
import { router } from './mock/router'

const Router = () => {
  return <RouterProvider router={router} />
}

export { Router }
