const monthList = () => {
  const monthName = new Intl.DateTimeFormat('en', { month: 'long' })
  return [...Array(12).keys()].map((i) => ({
    monthId: i,
    name: monthName.format(new Date(1970, i)),
  }))
}

const formatBirthDate = (date) => {
  if (typeof date === 'string') date = new Date(date)
  const name = new Intl.DateTimeFormat('en', { month: 'long' }).format(date)
  return `${date.getDate()} ${name}, ${date.getFullYear()} year`
}

const sortByLastAndFirstName = (a, b) => {
  if (a.lastName === b.lastName) return a.firstName > b.firstName ? 1 : -1
  return a.lastName > b.lastName ? 1 : -1
}

const getAlphabet = () => 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')

export { monthList, formatBirthDate, sortByLastAndFirstName, getAlphabet }
