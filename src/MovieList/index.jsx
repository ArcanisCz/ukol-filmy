import React from 'react';

const MovieList = ({ movies }) => (
  <>
    <p>
      {movies.map((film) => (
        <movies
          key={film.title}
          poster={film.poster}
          year={film.year}
          rating={film.rating}
          director={film.director}
          genre={film.genre}
          cast={film.cast}
        />
      ))}
    </p>
  </>
);

export default MovieList;
