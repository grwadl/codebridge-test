import placeholder from '@/assets/placeholder.png'
import { LazyLoad } from '@/components/lazy-load/LazyLoad'
import { Blog } from '@/lib/services/api'
import { Button, Card, CardActions, CardContent, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import './card.scss'

const BlogCard = (props: Blog) => {
  const { title, id, summary, imageUrl } = props

  return (
    <Link className="card-item" to={String(id)}>
      <Card sx={{ maxWidth: '100%' }}>
        <LazyLoad placeholder={placeholder} src={imageUrl} className="card-news-image" alt={title} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {summary}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </Link>
  )
}

export { BlogCard as Card }
