import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  users: [],
  loading: false
}

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    // Actions
    fetchUsers: (state, action) => {
      state.users = action.payload
    }
  }
})

export const { fetchUsers } = usersSlice.actions

export default usersSlice.reducer

export const getUsers = state => state.users.users
