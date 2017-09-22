import React from 'react';

import Container from './Container';
import Headline from './Headline';
import Leaderboard from './Leaderboard';
import KataList from './KataList';

const Katathon = (props) => {
  return (
    <div className="home-banner">
      <div className="overlay">
        <Container>
          <Headline width='100%' marginRight='0'>
            <h2>Welcome to today's Katathon!</h2>
          </Headline>
          <Leaderboard title='Leaderboard' data={props.participants} />
          <KataList title='Kata List' data={props.katas} />
        </Container>
      </div>
    </div>
  );
};

export default Katathon;
