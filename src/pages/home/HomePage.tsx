import { blogService } from '@/lib/services/api'
import { useEffect } from 'react'

type Props = {}

const Homepage = (props: Props) => {
  useEffect(() => {
    blogService.get().then((res) => console.log(res))
  }, [])

  return <div>Homepage</div>
}

export { Homepage }
