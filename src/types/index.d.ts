declare interface IUser {
  id: number
  email: string
  name: string
  gender: 'Male' | 'Female'
  status: 'Active' | 'Inactive'
  createdAt: string
  updatedAt: string
}

declare interface IPost {
  body: string
  createdAt: string
  id: number
  title: string
  updatedAt: string
  userId: number
}

declare interface IComment {
  id: number
  postId: number
  name: string
  email: string
  body: string
  createdAt: string
  updatedAt: string
}

declare interface IRequestResponse {
  code: number
  message: string
  data?: any
}