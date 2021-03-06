import { request } from 'services'

export const requestGetComments = async (commentId: number) => {
  return await request('GET', {
    url: `/posts/${commentId}/comments`
  })
}

export const requestGetPosts = async (userId: number, page: number) => {
  return await request('GET', {
    url: `/users/${userId}/posts?page=${page}`
  })
}

export const requestGetSinglePost = async (postId: number) => {
  return await request('GET', {
    url: `/posts/${postId}`
  })
}

export const requestGetUsers = async (page: number) => {
  return await request('GET', {
    url: `/users?page=${page}`
  })
}