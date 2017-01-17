var React = require('react');

function Button(props) {
  var divStyle = {
    textAlign: props.alignment
  };
  return (
    <div className="alignment-container" style={divStyle} >
      <button className={props.buttonType}>{props.show}</button>
    </div>
  );
}

module.exports = Button;
