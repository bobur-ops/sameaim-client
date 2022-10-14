import axios from 'axios'
const API = axios.create({
  baseURL: 'http://localhost:5000/'
})

export const createUser = data => API.post('user/signup', data)
export const loginUser = data => API.post('user/signin', data)
