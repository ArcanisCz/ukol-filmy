import React from 'react';

const Movie = (props) => {
  return (
    <>
      <h2>{props.title}</h2>
      <p>{props.poster}</p>
      <p>{props.year}</p>
      <p>{props.rating}</p>
      <p>{props.director}</p>
      <p>{props.genre}</p>
      <p>
        {props.cast} {cast.name} {cast.as}
      </p>
    </>
  );
};

export default Movie;
