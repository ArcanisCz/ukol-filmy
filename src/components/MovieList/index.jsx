import React from 'react';
import './style.css';

import Movie from './../Movie';

const MovieList = (props) => {
  return (
    <div className="container-filmy">
      {props.film.map((movie) => (
        <Movie
          key={movie.title + movie.year}
          name={movie.title}
          image={movie.poster}
          year={movie.year}
          rating={movie.rating}
          director={movie.director}
          genre={movie.genre}
          cast={movie.cast}
        />
      ))}
    </div>
  );
};

export default MovieList;
