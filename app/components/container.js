import React from 'react';

const Container = (props) => {
  return (
    <div className="container">
      {props.children}
    </div>
  );
}

module.exports = Container;
