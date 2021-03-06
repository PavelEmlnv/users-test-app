import { combineReducers } from 'redux'

import { usersReducer } from './users/reducer'
import { postsReducer } from './posts/reducer'
import { commentsReducer } from './comments/reducer'

export default combineReducers<StoreRootState>({
  users: usersReducer,
  posts: postsReducer,
  comments: commentsReducer
})

