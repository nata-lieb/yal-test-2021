import React from 'react'
import { useSelector } from 'react-redux'
import Month from './Month'

const header = {
  fontWeight: 'bold',
  fontSize: '1.5em',
  margin: '0.5em 0 2.5em',
  textAlign: 'center',
}

const divider = {
  width: '75%',
  borderTop: '2px solid lightgray',
  textAlign: 'center',
  marginBottom: '2em',
}

const EmployeesBirthday = () => {
  const months = useSelector(({ users }) => users.months)
  const selectedUsers = useSelector(({ users }) => users.selected)

  return (
    <div>
      <div style={header}>Employees birthday</div>
      <div>
        <hr style={divider} />
        {/* I don't like what prettier did to the part below (╥﹏╥) */}
        {selectedUsers.length > 0 ? (
          months.map(
            (m) =>
              m.users.length > 0 && (
                <Month name={m.name} users={m.users} key={m.monthId} />
              )
          )
        ) : (
          <div style={{ margin: '2.5em' }}>Employees List is empty</div>
        )}
      </div>
    </div>
  )
}

export default EmployeesBirthday
