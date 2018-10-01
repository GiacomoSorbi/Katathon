
export const getRecentEvent = events => {
  const newEvents = events.filter(event => event.date >= (Date.now() - 43200))
  const nextDate = newEvents.reduce((acc, next) => acc.date < next.date ? acc : next)
  return events.find(event => event.date === nextDate.date)
}

export const dateToString = date => new Date(date).toDateString()
