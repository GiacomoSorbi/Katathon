export const getNextEvent = events => {
  const newEvents = events.filter(event => event.date >= Date.now().valueOf())
  return newEvents.concat().sort((a, b) => a.date < b.date ? -1 : 1)[0]
}

export const dateToString = date => new Date(date).valueOf()
