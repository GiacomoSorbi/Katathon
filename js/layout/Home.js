var React = require("react");

var Timer = require("./Timer");

var Home = React.createClass({
  
  render: function(){
    return (
    	<div>
			<h1>Hello World, Hello Coders!</h1>
			<Timer/>
			<p>Not true, just making tests...</p>
    	</div>
    );
  }
});

module.exports = {Home};