import { CardSkeleton } from '@/components/UI/skeletons/card/CardSkeleton'

type Props = {
  count: number
}

const CardSkeletonList = ({ count }: Props) => {
  const arrayCount = Array.from(Array(count).keys())
  return (
    <>
      {arrayCount.map(() => (
        <CardSkeleton />
      ))}
    </>
  )
}

export { CardSkeletonList }
