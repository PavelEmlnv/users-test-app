import React, { useEffect, useState } from 'react'

import { useSelector, useDispatch } from 'react-redux'
import { RouteComponentProps } from 'react-router'
import { Page, Loader, PostCard, Button, CommentCard } from 'components'

import { getComments, getPost, addLoading } from 'store/comments/actions'

import './style.scss'

interface RouterProps {
  id: string
}

export const PostPage: React.FC<RouteComponentProps<RouterProps>> = ({ match }) => {
  const dispatch = useDispatch()
  
  const [commentsAreVisible, handleCommentsAreVisible] = useState<boolean>(false)
  
  const loadings = useSelector((state: StoreRootState) => state.comments.loading)
  const comments = useSelector((state: StoreRootState) => state.comments.commentsList)
  const post = useSelector((state: StoreRootState) => state.comments.post)
  
  const postId: number = parseInt(match.params.id, 10)

  useEffect(() => {
    dispatch(addLoading(['getComments', 'getPost']))
  }, [dispatch])

  useEffect(() => {
    dispatch(getComments(postId))
    dispatch(getPost(postId))
  }, [dispatch, postId])

  const showComments = () => handleCommentsAreVisible(true)

  const renderContent = () => {
    if (loadings.includes('getComments') || loadings.includes('getPost')) {
      return <Loader />
    } else {
      return (
        <div className="content">
          {post.id && <PostCard withHover={false} {...post} withButton={false} />}
          {
            commentsAreVisible ?
            (
              comments.length > 0 ?
              comments.map((comment: IComment) => <CommentCard key={`comment-${comment.id}`} {...comment} />) :
              <h1>Нет комментариев</h1>
            ) :
            <Button onClick={showComments}>Показать комментарии</Button>
          }  
        </div>
      )
    }
  }

  return (
    <Page className="post-page">
      {renderContent()}
    </Page>
  )
}