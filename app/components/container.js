var React = require('react');

function Container(props) {
  return (
    <div className="container">
      {props.children}
    </div>
  );
}

module.exports = Container;
