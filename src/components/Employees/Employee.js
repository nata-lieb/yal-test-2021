import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import PropTypes from 'prop-types'
import { selectedAdd, selectedRemove } from '../../store/usersSlice'

const subHeader = {
  fontWeight: 'bold',
  fontSize: '1em',
  margin: '1em 0 0.5em',
}

const Employee = ({ user }) => {
  const dispatch = useDispatch()
  const selectedUsers = useSelector(({ users }) => users.selected)
  const [active, setActive] = useState(() => selectedUsers.includes(user.id))
  const handleRadioChange = () => {
    setActive((state) => !state)
    dispatch(active ? selectedRemove(user) : selectedAdd(user))
  }

  return (
    <div>
      <div style={active ? { ...subHeader, color: 'blue' } : subHeader}>
        {user.lastName} {user.firstName}
      </div>

      <div>
        <div>
          <input type="radio" checked={!active} onChange={handleRadioChange} />
          not active
        </div>
        <div>
          <input type="radio" checked={active} onChange={handleRadioChange} />
          active
        </div>
      </div>
    </div>
  )
}

export default Employee

Employee.propTypes = {
  user: PropTypes.object.isRequired,
}
