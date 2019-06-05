import moment from 'moment'

export default (users, { text, sortBy, startDate, endDate }) =>
  users
    .filter(user => {
      //users.filter(user)
      const createdAtMoment = moment(user.createdAt) //user.createdAt
      const startDateMatch = startDate
        ? startDate.isSameOrBefore(createdAtMoment, 'day')
        : true
      const endDateMatch = endDate
        ? endDate.isSameOrAfter(createdAtMoment, 'day')
        : true
      const textMatch = user.ime.toLowerCase().includes(text.toLowerCase())
     
      return startDateMatch && endDateMatch && textMatch 
    })
    .sort((a, b) => {
      if (sortBy === 'date') {
        return a.createdAt < b.createdAt ? 1 : -1
      } else if (sortBy === 'oddel') {
        return a.odell < b.odell ? 1 : -1
      }
    })
