import { AnyAction } from 'redux'
import { ThunkAction } from 'redux-thunk'
import { MUser } from 'models'
import types from './actionTypes'

import * as API from 'api'

export const addLoading = (loading: string | string[]) => ({ type: types.ADD_LOADING, payload: loading })
export const removeLoading = (loading: string) => ({ type: types.REMOVE_LOADING, payload: loading })
const setUsers = (users: IUser[]) => ({ type: types.SET_USERS, payload: users })
const setPages = (pages: number) => ({ type: types.SET_PAGES, payload: pages })

export const getUsers = (page: number)
: ThunkAction<Promise<void>, UsersAppState, unknown, AnyAction> => {
  return async dispatch => {
    const loading: string = 'getUsers'
    dispatch(addLoading(loading))

    API.requestGetUsers(page)
    .then((response: any) => {
      const users: IUser[] = response.data.data.map((user: any) => MUser.create(user))
      const pages: number = response.data.meta.pagination.pages

      dispatch(setUsers(users))
      dispatch(setPages(pages))
    })
    .catch(_err => {})
    .finally(() => dispatch(removeLoading(loading)))
  }
}