import placeholder from '@/assets/placeholder.png'
import { LazyLoad } from '@/components/lazy-load/LazyLoad'
import { Blog } from '@/lib/services/api'
import { Button, Card, CardActions, CardContent } from '@mui/material'
import { Link } from 'react-router-dom'
import './card.scss'

const BlogCard = (props: Blog) => {
  const { title, id, summary, imageUrl } = props

  return (
    <Link className="card-item" to={String(id)}>
      <Card sx={{ maxWidth: '100%' }}>
        <LazyLoad placeholder={placeholder} src={imageUrl} className="card-news-image" alt={title} />
        <CardContent>
          <h5 className="card-title">{title}</h5>
          <p className="card-summary">{summary}</p>
        </CardContent>
        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </Link>
  )
}

export { BlogCard as Card }
