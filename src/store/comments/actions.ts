import { AnyAction } from 'redux'
import { ThunkAction } from 'redux-thunk'
import { MComment, MPost } from 'models'
import * as API from 'api'
import types from './actionTypes'

export const addLoading = (loading: string | string[]) => ({ type: types.ADD_LOADING, payload: loading })
export const removeLoading = (loading: string) => ({ type: types.REMOVE_LOADING, payload: loading })
const setComments = (comments: IComment[]) => ({ type: types.SET_COMMENTS, payload: comments })
const setPost = (post: IPost) => ({ type: types.SET_POST, payload: post })

export const getComments = (postId: number)
: ThunkAction<Promise<void>, UsersAppState, unknown, AnyAction> => {
  return async dispatch => {
    const loading: string = 'getComments'
    dispatch(addLoading(loading))

    API.requestGetComments(postId)
    .then((response: any) => {
      const comments: IComment[] = response.data.data.map((comment: any) => MComment.create(comment))
      dispatch(setComments(comments))
    })
    .catch(_err => {})
    .finally(() => dispatch(removeLoading(loading)))
  }
}

export const getPost = (postId: number)
: ThunkAction<Promise<void>, UsersAppState, unknown, AnyAction> => {
  return async dispatch => {
    const loading: string = 'getPost'
    dispatch(addLoading(loading))

    API.requestGetSinglePost(postId)
    .then((response: any) => {
      const post: IPost = MPost.create(response.data.data) 
      post && dispatch(setPost(post))
    })
    .catch(_err => {})
    .finally(() => dispatch(removeLoading(loading)))
  }
}