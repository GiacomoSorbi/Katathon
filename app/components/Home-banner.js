var React = require("react");
var Timer = require("./Timer");
var Headline = require("./Headline");

var HomeBanner = React.createClass({

  render: function(){
    return (
      <div className="home-banner">
        <div className="overlay">
          <Timer/>
          <Headline/>
        </div>
      </div>
    );
  }
});

module.exports = HomeBanner;
