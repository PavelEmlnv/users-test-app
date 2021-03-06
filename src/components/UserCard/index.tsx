import React, { useState } from 'react'

import { Card, Button } from 'components'

import { useHistory } from 'react-router-dom'

import UserAvatar from './assets/user.svg'

import './style.scss'

type AllProps = IUser

export const UserCard: React.FC<AllProps> = ({ id, name, gender, status, email }) => {
  
  const history = useHistory()

  const [buttonIsVisible, handleButtonIsVisible] = useState<boolean>(false)

  const toggleButtonVisibility = () => handleButtonIsVisible(!buttonIsVisible)

  const goToUserPage = () => history.push(`/user/${id}/1`)

  return (
    <Card onClick={toggleButtonVisibility} className="user-card">
      
      <div className="user-image">
        <img src={UserAvatar} alt="User" />
      </div>

      <div className="user-info">
        
        <div className="name-and-gender">
          <p>{name}</p>
          <p className="gender">{gender}</p>
        </div>
        
        <div className="email-and-status">
          <p>{email}</p>
          <p className="status">{status}</p>
        </div>

        <Button onClick={goToUserPage} disabled={!buttonIsVisible}>
          Перейти к постам
        </Button>

      </div>
    </Card>
  )
}