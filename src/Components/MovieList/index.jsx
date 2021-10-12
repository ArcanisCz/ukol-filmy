import React from 'react';

import Movie from '../Movie';

const MovieList = (props) => {
  return (
    <>
      {props.films.map((film) => (
        <Movie
          key={film.id}
          title={film.title}
          poster={film.poster}
          year={film.year}
          rating={film.rating}
          director={film.director}
          genre={film.genre}
          cast={film.name + film.as}
        />
      ))}
    </>
  );
};

export default MovieList;
