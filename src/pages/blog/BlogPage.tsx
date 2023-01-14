import placeholder from '@/assets/placeholder.png'
import { Loader } from '@/components/UI/loader/Loader'
import { LazyLoad } from '@/components/lazy-load/LazyLoad'
import { closeBlogPage, fetchOneBlog, useTypedDispatch, useTypedSelector } from '@/redux'
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace'
import { Card } from '@mui/material'
import { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import './blog-page.scss'

type Params = {
  id: string
}

const BlogPage = () => {
  const dispatch = useTypedDispatch()
  const navigate = useNavigate()
  const { id } = useParams<Params>()
  const { isLoading, openedBlog } = useTypedSelector((state) => state.blogPage)

  useEffect(() => {
    if (!id) return

    dispatch(fetchOneBlog(id))
    return () => {
      dispatch(closeBlogPage())
    }
  }, [id])

  if (isLoading) return <Loader />

  if (!isLoading && !openedBlog) throw new Error('not found')

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
      <div className="padded-section go-back text-arrow" onClick={() => navigate(-1)}>
        <KeyboardBackspaceIcon className="go-back-icon" />
        <span className="go-back-text">Back to Homepage</span>
      </div>
    </div>
  )
}

export { BlogPage }
