import { AnyAction } from 'redux'
import { MPost } from 'models'
import types from './actionTypes'
import uniq from 'lodash/uniq'

const initialState: CommentsAppState = {
  commentsList: [],
  loading: [],
  post: new MPost()
}

export const commentsReducer = (state = initialState, { type, payload }: AnyAction): typeof initialState => {
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
    case types.SET_COMMENTS:
      return {
        ...state,
        commentsList: payload
      }
    case types.SET_POST:
      return {
        ...state,
        post: payload
      }
    default: return state
  }
}