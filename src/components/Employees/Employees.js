import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { selectUsers } from '../../store/usersSlice'
import { getAlphabet } from '../../utils'
import Employee from './Employee'

const header = {
  fontWeight: 'bold',
  fontSize: '1.5em',
  margin: '0.5em 0 2.5em',
  textAlign: 'center',
}

const subHeader = {
  fontWeight: 'bold',
  fontSize: '1em',
  margin: '0.5em 0',
}

const flexContainer = {
  display: 'flex',
  flexWrap: 'wrap',
  borderRight: '2px solid lightgray',
}

const Letter = ({ letter, users }) => (
  <div style={{ margin: '0 1em 2em', minWidth: '7.5em' }}>
    <div style={subHeader}>{letter}</div>
    {users?.length > 0
      ? users.map((user) => <Employee user={user} key={user.id} />)
      : '-----'}
  </div>
)

const Employees = () => {
  const users = useSelector(selectUsers)
  const [letters, setLetters] = useState(getAlphabet)

  useEffect(() => {
    if (users.length > 0) {
      setLetters(
        users.reduce(
          (arr, user) =>
            arr.map((l) =>
              l.letter === user.lastName[0]
                ? { ...l, users: [...l.users, user] }
                : l
            ),
          getAlphabet().map((l) => ({ letter: l, users: [] }))
        )
      )
    }
  }, [users])

  return (
    <div>
      <div style={header}>Employees</div>
      <div style={flexContainer}>
        {users.length > 0
          ? letters.map((l, i) => (
              <Letter letter={l.letter} users={l.users} key={i} />
            ))
          : 'no users found'}
      </div>
    </div>
  )
}

export default Employees
