import React from 'react'

import { Card } from 'components'

import { formatDate } from 'services'

import './style.scss'

export const CommentCard: React.FC<IComment> = ({ name, email, body, createdAt }) => {
  
  return (
    <Card withHover={false} className="comment-card">
      
      <p className="name">{name}</p>
      
      <p className="body">{body}</p>
      
      <div className="comment-card-footer">
        <p className="email">{email}</p>
        <p className="date">{formatDate(createdAt)}</p>
      </div>
    
    </Card>
  )
}