var React = require("react");
var Timer = require("./Timer");

var HomeBanner = React.createClass({

  render: function(){
    return (
      <div className="home-banner">
        <div className="overlay">
          <h2>Hello Coders!</h2>
          <Timer/>
        </div>
      </div>
    );
  }
});

module.exports = HomeBanner;
