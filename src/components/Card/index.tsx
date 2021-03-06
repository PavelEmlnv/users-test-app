import React from 'react'

import classNames from 'classnames'

import './style.scss'

interface IProps {
  className?: string
  withHover?: boolean
  children: JSX.Element | JSX.Element[]
  onClick?: () => void
}

export const Card: React.FC<IProps> = ({ className, children, onClick = () => {}, withHover = true }) => {
  return (
    <div onClick={onClick} data-withhover={withHover} className={ classNames("card", className) }>
      {children}
    </div>
  )
}