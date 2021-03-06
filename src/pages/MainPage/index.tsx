import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Loader, Page, UserCard, Pagination } from 'components'

import { getUsers, addLoading } from 'store/users/actions'

import { RouteComponentProps } from 'react-router'
import './style.scss'

import User from 'components/UserCard/assets/user.svg'

interface RouterProps {
  page?: string
}

export const MainPage: React.FC<RouteComponentProps<RouterProps>> = ({ match }) => {
  const dispatch = useDispatch()

  const [usersAreVisible, handleUsersAreVisible] = useState<boolean>(false)

  const users = useSelector((state: StoreRootState) => state.users.usersList)
  const loadings = useSelector((state: StoreRootState) => state.users.loading)
  const pages = useSelector((state: StoreRootState) => state.users.pages)

  const currentPage: number = parseInt((match.params.page || '1'), 10) 
  
  const handleClick = () => handleUsersAreVisible(!usersAreVisible)

  useEffect(() => {
    dispatch(addLoading('getUsers'))
  }, [dispatch])

  useEffect(() => {
    dispatch(getUsers(currentPage))
  }, [currentPage, dispatch])

  return (
    <Page className="main-page">
      
      <div className="side-menu">
        <div onClick={handleClick} className="toggle-users">
          <img src={User} alt="Пользователи" />
          <p>Пользователи</p>
        </div>
      </div>
      
      <div className="content">
        { 
          usersAreVisible && 
          (loadings.includes('getUsers') ? 
          <Loader /> :
          <>
            {
              users.length > 0 ?
              users.map((user: IUser) => <UserCard key={`user-${user.id}`} {...user} />) :
              <h1>Нет пользователей</h1>
            }
            {pages > 1 && <Pagination url='/' pagesTotal={pages} page={currentPage} />}
          </>)
        }
      </div>

    </Page>
  )
}