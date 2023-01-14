import { NotFound } from '@/components/not-found/NotFound'
import { Button } from '@mui/material'
import { Link } from 'react-router-dom'
import './not-found.scss'

const NotFoundPage = () => {
  return (
    <NotFound className="flex-aligned padded-section" desc="Sorry, but i can't find resource you're looking for...">
      <Link className="not-found-link" to="/">
        <Button variant="contained">Go home</Button>
      </Link>
    </NotFound>
  )
}

export { NotFoundPage }
