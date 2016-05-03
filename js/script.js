//ReactDOM.render(<h1><>, document.getElementById('app'));
var Home = React.createClass({
  render: function () {
    return <div>
    	<h1>Hello World, Hello Coders!</h1>
    	<h2>Next Katathon is going to be on {this.props.date}</h2>
    	<p>[Not true, just making tests...]</p>
    	</div>;
  }
});
var nextKatathon=(new Date(2016,5,7)).toString();
ReactDOM.render(<Home date={nextKatathon} />, document.getElementById('app'));