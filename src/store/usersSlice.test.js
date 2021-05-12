import { configureStore } from '@reduxjs/toolkit'
import usersSlice, { selectedAdd, selectedRemove } from './usersSlice'

describe('usersSlice of the store', () => {
  const store = configureStore({
    reducer: { users: usersSlice },
  })

  describe('months array of the state', () => {
    test('has 12 elements', () => {
      const months = store.getState().users.months
      expect(months.length).toBe(12)
    })

    test('starts with current month', () => {
      const months = store.getState().users.months
      const currentMonth = new Date().getMonth()
      expect(months[0].monthId).toBe(currentMonth)
    })

    test('ends with the previous month', () => {
      const months = store.getState().users.months
      const currentMonth = new Date().getMonth()
      expect(months[11].monthId).toBe(currentMonth > 0 ? currentMonth - 1 : 11)
    })
  })

  describe('selected and months arrays of the state', () => {
    let store
    beforeEach(() => {
      store = configureStore({
        reducer: { users: usersSlice },
      })
    })

    test('are updated correctly on dispatch selectedAdd', () => {
      const selectedAtStart = store.getState().users.selected
      const monthsAtStart = store.getState().users.months
      expect(selectedAtStart.length).toBe(0)
      expect(monthsAtStart.find((m) => m.monthId === 1).users.length).toBe(0)
      store.dispatch(
        selectedAdd({
          id: '5e00928d91e7feaa9872ec08',
          firstName: 'Yang',
          lastName: 'Carson',
          dob: '2019-02-26T16:52:36.244Z',
        })
      )
      const selectedAtEnd = store.getState().users.selected
      const monthsAtEnd = store.getState().users.months
      expect(selectedAtEnd.length).toBe(1)
      expect(monthsAtEnd.find((m) => m.monthId === 1).users.length).toBe(1)
    })

    test('are updated correctly on dispatch selectedRemove', () => {
      store.dispatch(
        selectedAdd({
          id: '5e00928d91e7feaa9872ec08',
          firstName: 'Yang',
          lastName: 'Carson',
          dob: '2019-02-26T16:52:36.244Z',
        })
      )
      const selectedAtStart = store.getState().users.selected
      const monthsAtStart = store.getState().users.months
      expect(selectedAtStart.length).toBe(1)
      expect(monthsAtStart.find((m) => m.monthId === 1).users.length).toBe(1)

      store.dispatch(
        selectedRemove({
          id: '5e00928d91e7feaa9872ec08',
          firstName: 'Yang',
          lastName: 'Carson',
          dob: '2019-02-26T16:52:36.244Z',
        })
      )
      const selectedAtEnd = store.getState().users.selected
      const monthsAtEnd = store.getState().users.months
      expect(selectedAtEnd.length).toBe(0)
      expect(monthsAtEnd.find((m) => m.monthId === 1).users.length).toBe(0)
    })
  })
})
