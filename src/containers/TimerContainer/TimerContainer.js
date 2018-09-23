import React, { Component } from 'react'

import Timer from '../../components/Timer/Timer'

export default class TimerContainer extends Component {
  nextDate = new Date('2018-03-13 22:10:00')

  state = {
    timeLeft: (this.nextDate - Date.now() > 0) ? this.nextDate - Date.now() : 0
  }

  static stringifyTime = (t) => {
    return (t < 10) ? '0' + t : t
  }

  componentDidMount() {
    this.timer = (this.state.timeLeft > 0) ? setInterval(this.tick, 1000) : null
  }

  componentWillUpdate() {
    if (this.state.timeLeft <= 1000) {
      clearInterval(this.timer)
    }
  }

  componentWillUnmount() {
    clearInterval(this.timer)
  }

  tick = () => {
    this.setState({ timeLeft: Math.floor((this.nextDate - Date.now()) / 1000) * 1000 })
  }

  render() {
    const days = Math.floor(this.state.timeLeft / 86400000)
    const hours = Math.floor(this.state.timeLeft % 86400000 / 3600000)
    const minutes = Math.floor(this.state.timeLeft % 3600000 / 60000)
    const seconds = Math.floor(this.state.timeLeft % 60000 / 1000)

    return (
      <Timer
        timeLeft={this.state.timeLeft}
        days={TimerContainer.stringifyTime(days)}
        hours={TimerContainer.stringifyTime(hours)}
        minutes={TimerContainer.stringifyTime(minutes)}
        seconds={TimerContainer.stringifyTime(seconds)}
      />
    )
  }
}
