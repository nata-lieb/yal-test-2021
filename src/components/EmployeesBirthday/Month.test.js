import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import Month from './Month'

describe('Month component', () => {
  const name = 'February'
  const users = [
    {
      id: '5e00928d91e7feaa9872ec08',
      firstName: 'Yang',
      lastName: 'Carson',
      dob: '2019-02-26T16:52:36.244Z',
    },
  ]

  test('renders user name and dob in correct format', () => {
    const component = render(<Month name={name} users={users} />)

    expect(component.container).toHaveTextContent('Carson Yang')
    expect(component.container).toHaveTextContent('26 February, 2019 year')
  })

  test('renders month`s name', () => {
    const component = render(<Month name={name} users={users} />)

    expect(component.getByText('February')).toBeDefined()
  })
})
