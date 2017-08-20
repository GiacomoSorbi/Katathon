import React from 'react';
import {Link} from 'react-router-dom';
import Container from './container';
import Headline from './Headline';
import LeaderBoard from './LeaderBoard';
// import Button from './Button';

const Katathon = (props) => {
  return (
    <div className="home-banner">
      <div className="overlay">
        <Container>
          <Headline width='100%' marginRight='0'>
            <h2>Welcome to today's Katathon!</h2>
          </Headline>
          <LeaderBoard title='LeaderBoard' data={props.participants} />
        </Container>
      </div>
    </div>
  );
};

export default Katathon;
