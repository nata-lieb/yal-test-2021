import {
  createSlice,
  createAsyncThunk,
  createEntityAdapter,
} from '@reduxjs/toolkit'
import axios from 'axios'
import { monthList, sortByLastAndFirstName } from '../utils'

const usersUrl =
  'https://yalantis-react-school-api.yalantis.com/api/task0/users'

const months = (() => {
  const month = new Date().getMonth()
  const list = monthList().map((m) => ({ ...m, users: [] }))
  return list.concat(list.splice(0, month))
})()

export const getUsers = createAsyncThunk('users/list', async () => {
  try {
    const response = await axios.get(usersUrl)
    const data = await response.data
    const users = data.sort(sortByLastAndFirstName)

    const savedSelectedUsers = window.localStorage.getItem('YTappSelectedUsers')

    if (savedSelectedUsers?.length > 0) {
      const selected = JSON.parse(savedSelectedUsers)
      const monthsState = months.map((m) => ({ ...m })) // nested copy
      const selectedUsers = users.filter((u) => selected.includes(u.id))

      // in case earlier saved user is no longer fetched from endpoint
      if (selectedUsers.length < selected.length)
        window.localStorage.setItem(
          'YTappSelectedUsers',
          JSON.stringify(selectedUsers.map((u) => u.id))
        )

      const monthsNew = selectedUsers
        .reduce((arr, user) => {
          const monthIndex = arr.findIndex(
            (m) => m.monthId === new Date(user.dob).getMonth()
          )
          arr[monthIndex].users = arr[monthIndex].users.concat(user)
          return arr
        }, monthsState)
        .map((m) => {
          if (m.users.length > 1) {
            m.users.sort(sortByLastAndFirstName)
          }
          return m
        })

      return { users, selected, months: monthsNew }
    }

    return { users }
  } catch (e) {
    console.log('Error fetching users list: ', e)
    return { users: [] }
  }
})

const usersAdapter = createEntityAdapter({})

export const { selectAll: selectUsers } = usersAdapter.getSelectors(
  (state) => state.users
)

const usersSlice = createSlice({
  name: 'users',
  initialState: usersAdapter.getInitialState({
    selected: [],
    months: months,
  }),
  reducers: {
    selectedAdd: (state, action) => {
      state.selected.push(action.payload.id)
      const monthIndex = state.months.findIndex(
        (m) => m.monthId === new Date(action.payload.dob).getMonth()
      )
      state.months[monthIndex].users = state.months[monthIndex].users
        .concat(action.payload)
        .sort(sortByLastAndFirstName)
      window.localStorage.setItem(
        'YTappSelectedUsers',
        JSON.stringify(state.selected)
      )
    },
    selectedRemove: (state, action) => {
      state.selected = state.selected.filter((id) => id !== action.payload.id)
      const monthIndex = state.months.findIndex(
        (m) => m.monthId === new Date(action.payload.dob).getMonth()
      )
      state.months[monthIndex].users = state.months[monthIndex].users.filter(
        (user) => user.id !== action.payload.id
      )
      window.localStorage.setItem(
        'YTappSelectedUsers',
        JSON.stringify(state.selected)
      )
    },
  },
  extraReducers: {
    [getUsers.fulfilled]: (state, action) => {
      usersAdapter.setAll(state, action.payload.users)
      if (action.payload.selected) {
        state.selected = action.payload.selected
        state.months = action.payload.months
      }
    },
  },
})

export const { selectedAdd, selectedRemove } = usersSlice.actions

export default usersSlice.reducer
