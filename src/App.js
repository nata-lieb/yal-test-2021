import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Employees from './components/Employees/Employees'
import EmployeesBirthday from './components/EmployeesBirthday/EmployeesBirthday'
import { getUsers, selectUsers } from './store/usersSlice'
import { useWindowWidthBP } from './hooks'

const divider = {
  width: '50%',
  borderTop: '2px solid lightgray',
  textAlign: 'center',
  marginTop: '7em',
}

const App = () => {
  const dispatch = useDispatch()
  const users = useSelector(selectUsers)
  const windowWidth = useWindowWidthBP()

  useEffect(() => {
    if (users.length === 0) dispatch(getUsers({}))
  }, [users])

  return (
    <>
      <div className="App" style={{ width: '100%', display: 'flex' }}>
        <div style={{ width: windowWidth >= 600 ? '60%' : '50%' }}>
          <Employees />
        </div>
        <div
          style={{ borderRight: '2px solid lightgray', height: '100%' }}
        ></div>
        <div style={{ width: windowWidth >= 600 ? '40%' : '50%' }}>
          <EmployeesBirthday />
        </div>
      </div>
      <hr style={divider} />
    </>
  )
}

export default App
