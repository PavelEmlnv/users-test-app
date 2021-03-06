import React from 'react'
import classNames from 'classnames'

import './style.scss'

interface IProps {
  className?: string
  children: JSX.Element | JSX.Element[]
}

export const Page: React.FC<IProps> = ({ className, children }) => {
  return (
    <div className={ classNames("page", className) }>
      {children}
    </div>
  )
}