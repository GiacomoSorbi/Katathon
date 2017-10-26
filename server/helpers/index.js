module.exports = {
  getRecentEvent: function(events) {
    let newEvents = events.filter(event => event.date >= (Date.now() - 43200));
    let nextDate = newEvents.reduce((acc, next) => acc.date < next.date ? acc : next);
    return events.find(event => event.date === nextDate.date);
  }
}