import React from 'react'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import '@testing-library/jest-dom/extend-expect'
import { render, fireEvent } from '@testing-library/react'
import Employee from './Employee'

describe('Employee component', () => {
  const mockStore = configureStore()
  const initialState = { users: { selected: [] } }
  let store = mockStore(initialState)

  const user = {
    id: '5e00928d91e7feaa9872ec08',
    firstName: 'Yang',
    lastName: 'Carson',
    dob: '2019-02-26T16:52:36.244Z',
  }

  test('renders last name and first name at start', () => {
    const component = render(
      <Provider store={store}>
        <Employee user={user} />
      </Provider>
    )

    expect(component.container).toHaveTextContent('Carson Yang')
  })

  describe('renders user`s radio buttons', () => {
    test('reverses checked state and changes user`s name color when the radio button `active` has been clicked', () => {
      const component = render(
        <Provider store={store}>
          <Employee user={user} />
        </Provider>
      )

      expect(component.getByText('active').children[0].checked).toEqual(false)
      expect(component.getByText('not active').children[0].checked).toEqual(
        true
      )

      const radio = component.getByText('active').children[0]
      fireEvent.click(radio)

      expect(component.getByText('Carson Yang')).toHaveStyle({ color: 'blue' })
      expect(component.getByText('active').children[0].checked).toEqual(true)
      expect(component.getByText('not active').children[0].checked).toEqual(
        false
      )
    })

    describe('when user is initially selected', () => {
      const initialState = { users: { selected: ['5e00928d91e7feaa9872ec08'] } }
      let store = mockStore(initialState)

      test('checked state of active button is true and user`s name is blue', () => {
        const component = render(
          <Provider store={store}>
            <Employee user={user} />
          </Provider>
        )

        expect(component.getByText('Carson Yang')).toHaveStyle({
          color: 'blue',
        })
        expect(component.getByText('active').children[0].checked).toEqual(true)
        expect(component.getByText('not active').children[0].checked).toEqual(
          false
        )
      })

      test('reverses checked state of radio buttons and changes user`s name color when the radio button `not active` has been clicked', () => {
        const component = render(
          <Provider store={store}>
            <Employee user={user} />
          </Provider>
        )

        const radio = component.getByText('not active').children[0]
        fireEvent.click(radio)

        expect(component.getByText('Carson Yang')).not.toHaveStyle({
          color: 'blue',
        })
        expect(component.getByText('active').children[0].checked).toEqual(false)
        expect(component.getByText('not active').children[0].checked).toEqual(
          true
        )
      })
    })
  })
})
