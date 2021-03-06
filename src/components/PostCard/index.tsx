import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { formatDate } from 'services'
import { Card, Button } from 'components'

import './style.scss'

interface IProps {
  withButton?: boolean
  withHover?: boolean
}

type AllProps = IPost & IProps

export const PostCard: React.FC<AllProps> = ({ id, body, title, createdAt, withButton = true, withHover = true }) => {

  const history = useHistory()

  const [buttonIsVisible, handleButtonIsVisible] = useState<boolean>(false)

  const toggleButtonVisibility = () => handleButtonIsVisible(!buttonIsVisible)

  const goToUserPage = () => history.push(`/post/${id}`)

  return (
    <Card withHover={withHover} onClick={toggleButtonVisibility} className="post-card">
      <>
        <p className="title">{title}</p>
        
        <p className="post-content">{body}</p>

        <p className="date">{formatDate(createdAt)}</p>

        {withButton && <Button disabled={!buttonIsVisible} onClick={goToUserPage}>Показать</Button>}
      </>
    </Card>
  )
}