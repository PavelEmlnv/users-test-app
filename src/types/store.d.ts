declare interface UsersAppState {
  usersList: IUser[]
  loading: string[]
  pages: number
}

declare interface PostsAppState {
  postsList: IPost[]
  loading: string[]
  pages: number
}

declare interface CommentsAppState {
  commentsList: IComment[]
  loading: string[]
  post: IPost
}

declare interface StoreRootState {
  users: UsersAppState
  posts: PostsAppState
  comments: CommentsAppState
}