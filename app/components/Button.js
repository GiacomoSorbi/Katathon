import React from 'react';
import Link from 'react-router';

const Button = (props) => {
  let divStyle = {
    textAlign: props.alignment
  };
  return (
    <div className="alignment-container" style={divStyle} >
      <button className={props.buttonType}>
        {props.show}
      </button>
    </div>
  );
}

module.exports = Button;
