import placeholder from '@/assets/placeholder.png'
import { Loader } from '@/components/UI/loader/Loader'
import { LazyLoad } from '@/components/lazy-load/LazyLoad'
import { NotFound } from '@/components/not-found/NotFound'
import { useOneBlog } from '@/hooks/useOneBlog'
import { blogParams } from '@/lib/services/params'
import { useTypedSelector } from '@/redux'
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace'
import { Button, Card } from '@mui/material'
import { useNavigate, useParams } from 'react-router-dom'
import './blog-page.scss'

type Params = {
  id: string
}

const BlogPage = () => {
  const navigate = useNavigate()
  const { id } = useParams<Params>()
  const { isLoading, openedBlog } = useTypedSelector((state) => state.blogPage)
  const { searchedValue } = useTypedSelector((state) => state.blog)

  const goBackFunc = () => {
    const paramsOrNull = blogParams.generateSearchTitleAndDescription(searchedValue)
    const newParams = paramsOrNull ? '?' + paramsOrNull : ''
    navigate('/' + newParams)
  }

  useOneBlog(id)

  if (isLoading) return <Loader />

  if (!isLoading && !openedBlog)
    return (
      <NotFound className="not-found-blog padded-section" desc="Sorry, but i can not find this article...">
        <Button sx={{ marginTop: '15px' }} variant="contained" onClick={goBackFunc}>
          Go home
        </Button>
      </NotFound>
    )

  return (
    <div className="blog">
      <div className="img-banner">
        <LazyLoad
          placeholder={placeholder}
          src={openedBlog?.imageUrl ?? placeholder}
          alt={openedBlog?.title ?? 'blog image'}
        />
      </div>
      <div className="padded-section blog-card relative-card">
        <Card
          className="padded-section"
          sx={{ border: '1px solid #e5e5e5', paddingTop: '35px', paddingBottom: '50px' }}
        >
          <h2 className="blog-card-title">{openedBlog?.title}</h2>
          <p className="blog-card-desc">{openedBlog?.summary}</p>
        </Card>
      </div>
      <div className="padded-section go-back text-arrow" onClick={goBackFunc}>
        <KeyboardBackspaceIcon className="go-back-icon" />
        <span className="go-back-text">Back to Homepage</span>
      </div>
    </div>
  )
}

export { BlogPage }
