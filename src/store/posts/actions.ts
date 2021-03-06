import { AnyAction } from 'redux'
import { ThunkAction } from 'redux-thunk'
import { MPost } from 'models'
import * as API from 'api'
import types from './actionTypes'

export const addLoading = (loading: string | string[]) => ({ type: types.ADD_LOADING, payload: loading })
export const removeLoading = (loading: string) => ({ type: types.REMOVE_LOADING, payload: loading })
const setPosts = (posts: IPost[]) => ({ type: types.SET_POSTS, payload: posts })
const setPages = (pages: number) => ({ type: types.SET_PAGES, payload: pages })

export const getPosts = (userId: number, page: number)
: ThunkAction<Promise<void>, UsersAppState, unknown, AnyAction> => {
  return async dispatch => {
    const loading: string = 'getPosts'
    dispatch(addLoading(loading))

    API.requestGetPosts(userId, page)
    .then((response: any) => {
      const posts: IPost[] = response.data.data.map((post: any) => MPost.create(post))
      const pages: number = response.data.meta.pagination.pages

      dispatch(setPosts(posts))
      dispatch(setPages(pages))
    })
    .catch(_err => {})
    .finally(() => dispatch(removeLoading(loading)))
  }
}