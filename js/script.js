//ReactDOM.render(<h1><>, document.getElementById('app'));
var Home = React.createClass({
  render: function () {
    return <div>
    	<h1>Hello World, Hello Coders!</h1>
    	<h2>Next Katathon is going to be in {Math.floor(this.props.nextDate/86400000)} days, 
    	{Math.floor(this.props.nextDate%86400000/3600000)} hours, 
    	{Math.floor(this.props.nextDate%3600000/60000)} minutes, 
    	{Math.floor(this.props.nextDate%86400000/3600000)} hours, 
    	{Math.floor(this.props.nextDate%60000/1000)} seconds</h2>
    	<p>[Not true, just making tests...]</p>
    	</div>;
  }
});
var nextKatathon=(new Date(2016,4,7) - Date.now());
ReactDOM.render(<Home nextDate={nextKatathon} />, document.getElementById('app'));