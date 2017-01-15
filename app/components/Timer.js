var React = require("react");
var TimeDisplay = require("./Time-display");

var Timer = React.createClass({
  //setting data for the next katathon
  nextDate: new Date('2017-01-28 10:00:00'),
  getInitialState: function(){
    //adds the timeLeft property to state
    return {timeLeft: this.nextDate - Date.now()};
  },
  componentDidMount: function(){
  	//acts when the component is loaded
    this.timer = setInterval(this.tick, 1000);
  },
  componentWillUnmount: function(){
  	//acts then the component is removed
    clearInterval(this.timer);
  },
  tick: function(){
  	//function called by timer to update the timeLeft variable
  	this.setState({timeLeft: this.nextDate - Date.now()});
  },
  render: function(){
    var days = Math.floor(this.state.timeLeft/86400000),
    hours = Math.floor(this.state.timeLeft%86400000/3600000),
    minutes = Math.floor(this.state.timeLeft%3600000/60000),
    seconds = Math.floor(this.state.timeLeft%60000/1000)

    //generalised function for left-padding time values
    function stringifyTime(t) {
      return (t < 10) ? "0" + t : t;
    }

    //time values are passed to a stateless functional component to separate timer logic from UI
    return <TimeDisplay days={stringifyTime(days)} hours={stringifyTime(hours)} minutes={stringifyTime(minutes)} seconds={stringifyTime(seconds)}/>;
  }
});

module.exports = Timer;
