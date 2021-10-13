import React from 'react';
import './style.css';

import Actor from './../Actor';

const Movie = (props) => {
  return (
    <div className="filmy">
      <img src={props.image} alt="plagat k filmu" />
      <span className="meno">{props.name}</span>
      <span className="hodnotenie">{props.rating}/10</span>
      <div className="rok-rezia-zaner">
        <span className="rok">Rok vydání: {props.year}</span>
        <span className="rezia">Režie: {props.director}</span>
        <span className="zaner">Žánr: {props.genre}</span>
      </div>
      <div className="obsadenie">
        <p className="role">V hlavních rolích:</p>
        <div className="herci">
          {/*  <Actor name="John Travolta" as="Vincent Vega" /> */}
          {props.cast.map((actor) => (
            <Actor name={actor.name} as={actor.as} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Movie;
