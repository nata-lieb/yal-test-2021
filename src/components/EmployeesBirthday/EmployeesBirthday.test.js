import React from 'react'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import EmployeesBirthday from './EmployeesBirthday'

describe('EmployeesBirthday component', () => {
  const mockStore = configureStore()
  const initialState = {
    users: {
      selected: ['5e00928d91e7feaa9872ec08'],
      months: [
        { monthId: 4, name: 'May', users: [] },
        { monthId: 5, name: 'June', users: [] },
        { monthId: 6, name: 'July', users: [] },
        { monthId: 7, name: 'August', users: [] },
        { monthId: 8, name: 'September', users: [] },
        { monthId: 9, name: 'October', users: [] },
        { monthId: 10, name: 'November', users: [] },
        { monthId: 11, name: 'December', users: [] },
        { monthId: 0, name: 'January', users: [] },
        {
          monthId: 1,
          name: 'February',
          users: [
            {
              id: '5e00928d91e7feaa9872ec08',
              firstName: 'Yang',
              lastName: 'Carson',
              dob: '2019-02-26T16:52:36.244Z',
            },
          ],
        },
        { monthId: 2, name: 'March', users: [] },
        { monthId: 3, name: 'April', users: [] },
      ],
    },
  }

  let store = mockStore(initialState)

  test('renders month that has a user', () => {
    const component = render(
      <Provider store={store}>
        <EmployeesBirthday />
      </Provider>
    )

    expect(component.getByText('February')).toBeTruthy()
  })

  test('doesn`t render a month that has no users', () => {
    const component = render(
      <Provider store={store}>
        <EmployeesBirthday />
      </Provider>
    )

    expect(component.queryByText('March')).toBeFalsy()
  })
})
