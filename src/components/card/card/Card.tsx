import placeholder from '@/assets/placeholder.png'
import { LazyLoad } from '@/components/lazy-load/LazyLoad'
import { Blog } from '@/lib/services/api'
import { ISOdateToHumanReadable, highlightText } from '@/lib/utils'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt'
import CalendarTodayIcon from '@mui/icons-material/CalendarToday'
import { Card, CardContent } from '@mui/material'
import { Link } from 'react-router-dom'
import './card.scss'

type Props = Blog & { search: string }

const BlogCard = (props: Props) => {
  const { title, id, summary, imageUrl, publishedAt, search } = props

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
          <h5 className="card-title">{highlightText(title, search)}</h5>
          <p className="card-summary">{highlightText(summary, search)}</p>
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
