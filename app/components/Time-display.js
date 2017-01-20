import React from 'react';

const TimeDisplay = (props) => {
  return (
    <div className="time-container">
      <h2>Hello Coders!</h2>
      <h2>Time until the next Katathon:</h2>
      <h1>{props.days} days, {props.hours}:{props.minutes}:{props.seconds}</h1>
      <h2><a href="https://www.meetup.com/Codecademy-London/" target="_blank">Sign up here...</a></h2>
    </div>
  );
}

module.exports = TimeDisplay;
