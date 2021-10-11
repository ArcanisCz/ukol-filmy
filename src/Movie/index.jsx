import React from 'react';

const Movie = ({ title, poster, year, rating, director, genre, cast }) => {
  return (
    <>
      <h2>{title}</h2>
      <p>{poster}</p>
      <p>{year}</p>
      <p>{rating}</p>
      <p>{director}</p>
      <p>{genre}</p>
      <p>
        {cast.name}
        {cast.as}
      </p>
    </>
  );
};

export default Movie;
