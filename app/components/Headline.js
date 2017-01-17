var React = require("react");
var Button = require("./Button");

function Headline () {
  return (
    <div className="headline-container">
      <h2>More Info</h2>
      <p>At katathon.org we are all software developers who seek constant learning.  Our primary aim is to help good developers become awesome developers, while still offering a great platform into the world of software development for the aspiring coder.</p>
      <Button buttonType="primary-button" alignment="center" show="Find out more..."/>
    </div>
  );
}

module.exports = Headline;
