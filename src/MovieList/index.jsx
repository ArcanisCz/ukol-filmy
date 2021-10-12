import React from 'react';

import Movie from '../Movie';

const MovieList = (props) => {
  return (
    <div className="movieList">
      {props.films.map((film) => (
        <Movie
          title={film.title}
          poster={film.poster}
          year={film.year}
          rating={film.rating}
          director={film.director}
          genre={film.genre}
          cast={film.cast}
        />
      ))}
    </div>
  );
};

export default MovieList;
