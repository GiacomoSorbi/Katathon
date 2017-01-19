import React from 'react';

const Headline = (props) => {
  return (
    <div className="headline-container">
      { props.children }
    </div>
  );
}

module.exports = Headline;
