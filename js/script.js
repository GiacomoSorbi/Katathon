//ReactDOM.render(<h1><>, document.getElementById('app'));
var Home = React.createClass({
  getInitialState: function(){
    //adds the nextDate property to state
    return {nextDate: new Date(2016,4,7) - Date.now()};
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
  	//function called by timer to update the nextDate variable
  	this.setState({nextDate: new Date(2016,4,7) - Date.now()});
  },
  render: function(){
    return <div>
      	<h1>Hello World, Hello Coders!</h1>
    	<h2>Next Katathon is going to be in {Math.floor(this.state.nextDate/86400000)} days, 
    	{Math.floor(this.state.nextDate%86400000/3600000)} hours, 
    	{Math.floor(this.state.nextDate%3600000/60000)} minutes, 
    	{Math.floor(this.state.nextDate%86400000/3600000)} hours, 
    	{Math.floor(this.state.nextDate%60000/1000)} seconds</h2>
    	<p>[Not true, just making tests...]</p>
    	</div>;
  }
});
// var nextKatathon=(new Date(2016,4,7) - Date.now());
ReactDOM.render(<Home/>, document.getElementById('app'));