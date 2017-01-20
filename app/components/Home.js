import React from 'react';
import Container from './Container';
import Timer from './Timer';
import Headline from './Headline';
import Button from './Button';

const Home = (props) => {
  return (
    <div className="home-banner">
      <div className="overlay">
        <Container>
          <Timer/>
          <Headline width='340px'>
            <h2>More Info</h2>
            <p>At katathon.org we are all software developers who seek constant learning.  Our primary aim is to help good developers become awesome developers, while still offering a great platform into the world of software development for the aspiring coder.</p>
            <Button buttonType="primary-button" alignment="center" show="Find out more..."/>
          </Headline>
        </Container>
      </div>
    </div>
  );
};

module.exports = Home;
