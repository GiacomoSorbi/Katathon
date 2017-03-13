import React from 'react';
import TimeDisplay from './Time-display';

const Timer = React.createClass({
  //setting data for the next katathon
  //could it be possible to retrieve this data automatically, using the Meetup API?
  nextDate: new Date('2017-03-13 22:10:00'),
  getInitialState: function(){
    //adds the timeLeft property to state
    return {timeLeft: this.nextDate - Date.now() > 0 ? this.nextDate - Date.now() : 0};
  },
  componentDidMount: function(){
  	//acts when the component is loaded
    this.timer = (this.state.timeLeft > 0) ? setInterval(this.tick, 1000) : null;
  },
  componentWillUpdate: function() {
    if (this.state.timeLeft <= 1000) {
      clearInterval(this.timer);
    }
  },
  componentWillUnmount: function(){
  	//acts then the component is removed
    clearInterval(this.timer);
  },
  tick: function(){
  	//function called by timer to update the timeLeft variable
  	this.setState({timeLeft: Math.floor((this.nextDate - Date.now()) / 1000) * 1000});
  },
  render: function(){
    let days = Math.floor(this.state.timeLeft/86400000),
    hours = Math.floor(this.state.timeLeft%86400000/3600000),
    minutes = Math.floor(this.state.timeLeft%3600000/60000),
    seconds = Math.floor(this.state.timeLeft%60000/1000)

    //generalised function for left-padding time values
    function stringifyTime(t) {
      return (t < 10) ? '0' + t : t;
    }

    //time values are passed to a stateless functional component to separate timer logic from UI
    return <TimeDisplay timeLeft = {this.state.timeLeft} days={stringifyTime(days)} hours={stringifyTime(hours)} minutes={stringifyTime(minutes)} seconds={stringifyTime(seconds)}/>;
  }
});

export default Timer;
