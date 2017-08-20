import React from 'react';

const Button = (props) => {
  let divStyle = {
    textAlign: props.alignment
  };
  return (
    <div className="alignment-container" style={divStyle} >
      <button className={props.buttonType}>
        {props.children}
      </button>
    </div>
  );
}

export default Button;
