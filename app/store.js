import { configureStore } from '@reduxjs/toolkit'
import usersSlice from '../slices/usersSlice'

//Global store
export const store = configureStore({
  reducer: {
    //reducers are defined here
    users: usersSlice
  }
})
