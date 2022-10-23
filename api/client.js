import axios from 'axios'
const API = axios.create({
  baseURL: 'http://localhost:5000/'
})

export const createUser = data => API.post('user/signup', data)
export const loginUser = data => API.post('user/signin', data)
export const getUserApi = id => API.get(`user/${id}`)
export const createClubApi = data => API.post('clubs/createClub', data)
export const getClubsApi = () => API.get('clubs')
export const getClubApi = id => API.get(`clubs/${id}`)
export const getClubsRating = () => API.get('clubs/rating')
export const updateClubApi = (data, id) =>
  API.patch(`clubs/updateClub/${id}`, data)
export const createPostApi = (id, data) =>
  API.post(`clubs/createPost/${id}`, data)
export const getPostApi = (id, postId) =>
  API.get(`clubs/getPost/${id}/${postId}`)
export const joinToClubApi = (data, clubId, userId) =>
  API.post(`clubs/setMember/${clubId}/${userId}`, data)
export const leaveClubApi = (data, clubId) =>
  API.post(`clubs/leave/${clubId}`, data)
export const createComment = (data, clubId, postId) =>
  API.post(`clubs/createComment/${clubId}/${postId}`, data)

// News
export const getNewsApi = () => API.get('news/getNews')
export const createNewsApi = data => API.post('news/createNews', data)
export const getOneNewsApi = id => API.get(`news/getOneNews/${id}`)
export const deleteNewsApi = id => API.patch(`news/deleteNews/${id}`)
export const commentNewsApi = (data, id) =>
  API.post(`news/commentNews/${id}`, data)
export const deleteCommentNewsApi = (newsId, commentId) =>
  API.patch(`/deleteComment/${newsId}/${commentId}`)
