import React from 'react'

import { Link } from 'react-router-dom'

import Button from '../../common/Button/Button'

const Timer = (props) => (
  <div className="time-container">
    <h2>Hello Coders!</h2>
    <h2>Time until the next Katathon:</h2>
    <h1>{props.days} days, {props.hours}:{props.minutes}:{props.seconds}</h1>
      <Button buttonType="primary-button" alignment="center">
        {props.timeLeft > 0
          ? <a href="https://www.meetup.com/Codecademy-London/events/237021466/" target="_blank">Sign up here...</a>
          : <Link to="/katathon">Join Katathon!</Link>}
      </Button>
  </div>
)

export default Timer
