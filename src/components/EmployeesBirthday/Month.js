import React from 'react'
import PropTypes from 'prop-types'
import { formatBirthDate } from '../../utils'

const subHeader = {
  fontWeight: 'bold',
  fontSize: '1em',
  margin: '0.5em 0',
}

const Month = ({ name, users }) => (
  <div style={{ margin: '2.5em' }}>
    <div style={subHeader}>{name}</div>
    <ul>
      {users.map((u) => (
        <li key={u.id}>
          {u.lastName} {u.firstName} - {formatBirthDate(u.dob)}
        </li>
      ))}
    </ul>
  </div>
)

export default Month

Month.propTypes = {
  name: PropTypes.string.isRequired,
  users: PropTypes.array.isRequired,
}
