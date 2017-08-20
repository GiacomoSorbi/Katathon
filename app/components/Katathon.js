import React from 'react';

import Container from './Container';
import Headline from './Headline';
import Leaderboard from './Leaderboard';

const Katathon = (props) => {
  return (
    <div className="home-banner">
      <div className="overlay">
        <Container>
          <Headline width='100%' marginRight='0'>
            <h2>Welcome to today's Katathon!</h2>
          </Headline>
          <Leaderboard title='LeaderBoard' data={props.participants} />
        </Container>
      </div>
    </div>
  );
};

export default Katathon;
