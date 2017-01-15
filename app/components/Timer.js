var React = require("react");

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
    return <div>
    	<h2>Next Katathon is going to be in {Math.floor(this.state.timeLeft/86400000)} days,
    	{Math.floor(this.state.timeLeft%86400000/3600000)} hours,
    	{Math.floor(this.state.timeLeft%3600000/60000)} minutes,
    	{Math.floor(this.state.timeLeft%60000/1000)} seconds</h2>
    	</div>;
  }
});

module.exports = Timer;
