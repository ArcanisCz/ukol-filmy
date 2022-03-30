import React from "react";
import Actor from "../Actor";

import "./style.css";

const Movie = ({ title, poster, year, rating, director, genre, cast }) => {
  return (
    <div className="movies">
      <div className="movie_poster">{poster}</div>¨
      <div className="description">
        <div className="movie_title">{title}</div>
        <div className="movie_year">{year}</div>
        <div className="movie_rating">{rating}</div>
        <div className="movie_director">{director}</div>
        <div className="movie_genre">{genre}</div>
        <div className="movie_cast">
          {cast.map(({ name, as }, i) => (
            <Actor key={i} name={name} as={as} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Movie;
