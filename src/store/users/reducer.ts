import { AnyAction } from 'redux'
import types from './actionTypes'
import uniq from 'lodash/uniq'

const initialState: UsersAppState = {
  usersList: [],
  loading: [],
  pages: 0
}

export const usersReducer = (state = initialState, { type, payload }: AnyAction): typeof initialState => {
  switch (type) {
    case types.ADD_LOADING:
      return {
        ...state,
        loading: uniq(state.loading.concat(payload))
      }
    case types.REMOVE_LOADING:
      return {
        ...state,
        loading: state.loading.filter((loading: string) => loading !== payload)
      }
    case types.SET_USERS:
      return {
        ...state,
        usersList: payload
      }
    case types.SET_PAGES:
      return {
        ...state,
        pages: payload
      }
    default: return state
  }
}