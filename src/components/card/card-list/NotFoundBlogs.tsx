import { NotFound } from '@/components/not-found/NotFound'
import { blogParams } from '@/lib/services/params'
import { fetchBlogs, useTypedDispatch } from '@/redux'
import { Button } from '@mui/material'

const NotFoundBlogs = () => {
  const dispatch = useTypedDispatch()
  const clearFilters = () => {
    blogParams.replaceWindowSearch<null>(null)
    dispatch(fetchBlogs(''))
  }

  return (
    <NotFound desc="Sorry, but i cant find any related blogs...">
      <Button sx={{ marginTop: '15px' }} className="not-found-clear-filters" onClick={clearFilters} variant="contained">
        Clear filters
      </Button>
    </NotFound>
  )
}

export default NotFoundBlogs
