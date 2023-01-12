import { Outlet } from 'react-router-dom'
import Header from '../header/Header'

const Layout = () => {
  return (
    <div className="layout">
      <Header />
      <Outlet />
    </div>
  )
}

export { Layout }
