import React from 'react'
import './not-found.scss'

type Props = {
  title?: string
  desc: string
  children: React.ReactNode
}

const NotFound = ({ children, desc, title = '404' }: Props) => {
  return (
    <div className="not-found">
      <h1 className="not-found-numbers">{title}</h1>
      <p className="not-found-description">{desc}</p>
      {children}
    </div>
  )
}

export { NotFound }
