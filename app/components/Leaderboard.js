import React from 'react';

const Leaderboard = (props) => {
  return (
    <div className='leaderboard'>
      <h3>{props.title}</h3>
      {props.data.map((item, index) => {
        return (<div className='leaderboard-item'>
          <div className='leaderboard-col leaderboard-col-position'>
            <span>{index + 1}</span>
          </div>
          <div className='leaderboard-col leaderboard-col-name'>
            <span>{item.username}</span>
          </div>
          <div className='leaderboard-col leaderboard-col-score'>
            <span>{item.score}</span>
          </div>
        </div>)
      })}
    </div>
  );
}

export default Leaderboard;