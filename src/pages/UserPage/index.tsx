import React, { useEffect } from 'react'

import { useSelector, useDispatch } from 'react-redux'

import { getPosts, addLoading } from 'store/posts/actions'

import { Page, Loader, PostCard, Pagination } from 'components'

import { RouteComponentProps } from 'react-router'

import './style.scss'

interface RouterProps {
  id: string
  page: string
}

export const UserPage: React.FC<RouteComponentProps<RouterProps>> = ({ match }) => {

  const dispatch = useDispatch()

  const loadings = useSelector((state: StoreRootState) => state.posts.loading)
  const posts = useSelector((state: StoreRootState) => state.posts.postsList)
  const pages = useSelector((state: StoreRootState) => state.posts.pages)
  
  const userId = parseInt(match.params.id, 10)
  const currentPage: number = parseInt((match.params.page || '1'), 10) 

  useEffect(() => {
    dispatch(addLoading('getPosts'))
  }, [dispatch])

  useEffect(() => {
    dispatch(getPosts(userId, currentPage))
  }, [userId, currentPage, dispatch])

  return (
    <Page className="user-page">
      {
        loadings.includes('getPosts') ?
        <Loader /> :
        <>
          {
            posts.length > 0 ?
            posts.map((post: IPost) => <PostCard key={`post-${post.id}`} {...post} />) :
            <h1>Нет постов</h1>
          }
          {pages > 1 && <Pagination url={`/user/${userId}/`} pagesTotal={pages} page={currentPage} />}
        </>
      }
    </Page>
  )
}