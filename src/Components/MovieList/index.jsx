import React from 'react';

import Movie from '../Movie';

import './style.css';

const MovieList = (props) => {
  return (
    <>
      <div className="movieListTable">
        {props.films.map((film) => (
          <Movie
            key={film.id}
            title={film.title}
            poster={film.poster}
            year={film.year}
            rating={film.rating}
            director={film.director}
            genre={film.genre}
            actors={film.cast}
          />
        ))}
      </div>
    </>
  );
};

export default MovieList;
