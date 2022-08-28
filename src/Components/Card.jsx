import React from 'react';
import './Components Styles/Main.css'

const Card = ({ val }) => {

  return (
    <div className="cardContainer" id={val.id}>
      <h1>{val.heading}</h1>
      <p>{val.review}</p>
      <img src={val.src} alt={val.name} />
      <h3>{val.name}</h3>
      <p>{val.location}</p>
    </div>
  )
}

export default Card