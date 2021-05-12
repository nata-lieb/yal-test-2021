import React from 'react'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import Employees from './Employees'

describe('Employees component', () => {
  const mockStore = configureStore()
  const initialState = {
    users: {
      ids: [
        '5e00928d1a9ac4bd431ff876',
        '5e00928dd8564cf882f0bb6a',
        '5e00928dac694570760105c4',
        '5e00928d91e7feaa9872ec08',
      ],
      entities: {
        '5e00928d1a9ac4bd431ff876': {
          id: '5e00928d1a9ac4bd431ff876',
          firstName: 'Toni',
          lastName: 'Albert',
          dob: '2019-03-23T01:30:35.337Z',
        },
        '5e00928dd8564cf882f0bb6a': {
          id: '5e00928dd8564cf882f0bb6a',
          firstName: 'Felicia',
          lastName: 'Ayers',
          dob: '2019-06-05T11:12:29.457Z',
        },
        '5e00928dac694570760105c4': {
          id: '5e00928dac694570760105c4',
          firstName: 'Molina',
          lastName: 'Baird',
          dob: '2019-01-07T03:26:17.817Z',
        },
        '5e00928d91e7feaa9872ec08': {
          id: '5e00928d91e7feaa9872ec08',
          firstName: 'Yang',
          lastName: 'Carson',
          dob: '2019-02-26T16:52:36.244Z',
        },
      },
      selected: [],
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
        { monthId: 1, name: 'February', users: [] },
        { monthId: 2, name: 'March', users: [] },
        { monthId: 3, name: 'April', users: [] },
      ],
    },
  }
  let store = mockStore(initialState)

  test('renders all users grouped by last name', () => {
    const component = render(
      <Provider store={store}>
        <Employees />
      </Provider>
    )

    expect(component.getByText('A').parentNode).toHaveTextContent('Albert Toni')
    expect(component.getByText('A').parentNode).toHaveTextContent(
      'Ayers Felicia'
    )
    expect(component.getByText('B').parentNode).toHaveTextContent(
      'Baird Molina'
    )
    expect(component.getByText('C').parentNode).toHaveTextContent('Carson Yang')
  })

  test('renders `-----` for letters with no users', () => {
    const component = render(
      <Provider store={store}>
        <Employees />
      </Provider>
    )

    expect(component.getByText('D').parentNode).toHaveTextContent('---')
  })
})
