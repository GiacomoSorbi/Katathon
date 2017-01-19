var React = require("react");
var Container = require("./Container");
var Timer = require("./Timer");
var Headline = require("./Headline");

var Home = React.createClass({

  render: function(){
    return (
      <div className="home-banner">
        <div className="overlay">
          <Container>
            <Timer/>
            <Headline/>
          </Container>
        </div>
      </div>
    );
  }
});

module.exports = Home;
