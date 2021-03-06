import { AnyAction } from 'redux'
import types from './actionTypes'
import uniq from 'lodash/uniq'

const initialState: PostsAppState = {
  postsList: [],
  loading: [],
  pages: 1
}

export const postsReducer = (state = initialState, { type, payload }: AnyAction): typeof initialState => {
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
    case types.SET_POSTS:
      return {
        ...state,
        postsList: payload
      }
    case types.SET_PAGES:
      return {
        ...state,
        pages: payload
      }
    default: return state
  }
}