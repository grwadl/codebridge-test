import { Button } from '@mui/material'
import { Link } from 'react-router-dom'
import './not-found.scss'

const NotFound = () => {
  return (
    <div className="not-found">
      <h1 className="not-found-numbers">404</h1>
      <p className="not-found-description">Sorry, but i can't find resource you're looking for...</p>
      <Link className="not-found-link" to="/">
        <Button variant="contained">Go home</Button>
      </Link>
    </div>
  )
}

export { NotFound }
