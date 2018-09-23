import React from 'react'

const KataList = (props) => (
  <div className='kataboard'>
    <h3>{props.title}</h3>
    {props.data.map((item, index) => (
      <div key={item.username} className='kataboard-item'>
        <div className='kataboard-col kataboard-col-position'>
          <span>{index + 1}</span>
        </div>
        <div className='kataboard-col kataboard-col-name'>
          <span>{item.title}</span>
        </div>
        <div className='kataboard-col kataboard-col-score'>
          <span>{item.score}</span>
        </div>
      </div>))}
  </div>
)

export default KataList
