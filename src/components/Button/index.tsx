import React from 'react'

import './style.scss'

interface IProps {
  children: React.ReactNode
  disabled?: boolean
  onClick: () => void
}

export const Button: React.FC<IProps> = ({ children, disabled = false, onClick }) => <button disabled={disabled} onClick={onClick}>{children}</button>