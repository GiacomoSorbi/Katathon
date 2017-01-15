var React = require("react");
var Header = require("./Header");
var HomeBanner = require("./Home-banner");

var Home = React.createClass({

  render: function(){
    return (
    	<div>
      <Header/>
      <HomeBanner/>
    	</div>
    );
  }
});

module.exports = Home;
