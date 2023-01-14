import './loader.scss'

type Props = {
  className?: string
}

const Loader = ({ className }: Props) => {
  return <div className={`loader-circle ${className ?? ''}`}></div>
}

export { Loader }
