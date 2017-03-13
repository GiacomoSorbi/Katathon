import React from 'react';
import Link from 'react-router';

const Button = (props) => {
  let divStyle = {
    textAlign: props.alignment
  };
  return (
    <div className="alignment-container" style={divStyle} >
    <a href={props._link}>
      <button className={props.buttonType}>
        {props.children}
      </button>
      </a>
    </div>
  );
}

module.exports = Button;
