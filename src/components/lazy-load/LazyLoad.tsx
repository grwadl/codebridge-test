import { useLazyLoading } from '@/hooks/useLazyLoading'
import { useRef, useState } from 'react'
import './lazy-load.scss'

type Props = {
  src: string
  alt: string
  placeholder: string
  className?: string
}

const LazyLoad = (props: Props) => {
  const { src, alt, placeholder, className } = props

  const [isLoaded, setIsLoaded] = useState<boolean>(false)
  const [isIntersecting, setIsIntersecting] = useState<boolean>(false)
  const ref = useRef<HTMLImageElement>(null)

  const onIntersection = () => setIsIntersecting(true)
  const onLoad = () => setIsLoaded(true)

  useLazyLoading(ref, onIntersection)

  return (
    <div className={`lazy-load-container ${className}`} ref={ref}>
      {isIntersecting && (
        <>
          <img
            className={`lazy-load-image real-image ${isLoaded ? 'shown' : 'hidden'}`}
            src={src}
            alt={alt}
            onLoad={onLoad}
          />
          <img
            className={`lazy-load-image placeholder-image ${isLoaded ? 'disappearing' : 'appearing'}`}
            src={placeholder}
            alt={alt}
          />
        </>
      )}
    </div>
  )
}

export { LazyLoad }
