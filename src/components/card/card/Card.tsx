import placeholder from '@/assets/placeholder.png'
import { LazyLoad } from '@/components/lazy-load/LazyLoad'
import { Blog } from '@/lib/services/api'
import { ISOdateToHumanReadable } from '@/lib/utils'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt'
import CalendarTodayIcon from '@mui/icons-material/CalendarToday'
import { Card, CardContent } from '@mui/material'
import { Link } from 'react-router-dom'
import './card.scss'

const BlogCard = (props: Blog) => {
  const { title, id, summary, imageUrl, publishedAt } = props

  const date = ISOdateToHumanReadable(publishedAt)

  return (
    <Link className="card-item" to={String(id)}>
      <Card sx={{ maxWidth: '100%' }}>
        <LazyLoad placeholder={placeholder} src={imageUrl} className="card-news-image" alt={title} />
        <CardContent sx={{ padding: '25px 20px' }}>
          <div className="date-wrapper">
            <CalendarTodayIcon height="13px" />
            <span className="date-text">{date}</span>
          </div>
          <h5 className="card-title">{title}</h5>
          <p className="card-summary">{summary}</p>
          <div className="learn-more-wrap">
            <span className="learn-more-text">Learn more</span>
            <ArrowRightAltIcon className="learn-more-arrow" />
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}

export { BlogCard as Card }
