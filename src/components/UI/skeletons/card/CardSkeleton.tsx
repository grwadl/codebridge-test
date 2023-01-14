import { Skeleton } from '@mui/material'

const CardSkeleton = () => {
  return (
    <div className="card-item skeleton">
      <Skeleton variant="rounded" height="217px" className="card-item skeleton" />
      <Skeleton variant="rectangular" sx={{ margin: '25px 0' }} height="24px" width="50%" />
      <Skeleton variant="rectangular" height="24px" />
    </div>
  )
}

export { CardSkeleton }
