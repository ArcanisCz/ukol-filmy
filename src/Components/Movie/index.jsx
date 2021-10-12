import React from 'react';

import Actor from '../Actor';

const Movie = (props) => {
  return (
    <>
      <h2>{props.title}</h2>
      <p>{props.poster}</p>
      <p>{props.year}</p>
      <p>{props.rating}</p>
      <p>{props.director}</p>
      <p>{props.genre}</p>
      <>
        {props.cast.map((herec) => (
          <Actor key={herec.name} as={herec.as} />
        ))}
      </>
    </>
  );
};

export default Movie;
