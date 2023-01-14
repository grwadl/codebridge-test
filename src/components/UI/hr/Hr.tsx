import './hr.scss'

type Props = {
  className?: string
}

const Hr = ({ className }: Props) => {
  return <hr className={`hr ${className ?? ''}`} />
}

export { Hr }
