var React = require("react");

function TimeDisplay(props) {
  return (
    <div className="time-container">
      <h2>Hello Coders!</h2>
      <h2>Time until the next Katathon:</h2>
      <h1>{props.days} days, {props.hours}:{props.minutes}:{props.seconds}</h1>
    </div>
  );
}

module.exports = TimeDisplay;
