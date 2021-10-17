import React from 'react';

import Actor from '../Actor';

import './style.css';

const Movie = (props) => {
  return (
    <div className="table">
      <div className="poster">
        <img src={props.poster} alt="poster" className="img" />
      </div>

      <div className="rating">{props.rating}/10</div>

      <div className="title">
        <h3>{props.title}</h3>

        <br />

        <p>
          <b className="year">Rok vydání: </b>
          {props.year}
        </p>

        <p>
          <b>Režie: </b>
          {props.director}
        </p>

        <p>
          <b>Žánr: </b>
          {props.genre}
        </p>

        <br />

        <div className="role">V hlavních rolích:</div>

        <>
          {props.actors.map((herec) => (
            <Actor key={herec.name} name={herec.name} as={herec.as} />
          ))}
        </>
      </div>
    </div>
  );
};

export default Movie;
