import React from 'react';
import {Link} from 'react-router';
import Container from './Container';
import Headline from './Headline';
import Button from './Button';

const Katathon = (props) => {
  return (
    <div className="home-banner">
      <div className="overlay">
        <Container>
          <Headline width='100%' marginRight='0'>
            <h2>Katathon!</h2>
          </Headline>
        </Container>
      </div>
    </div>
  );
};

 export default Katathon;
