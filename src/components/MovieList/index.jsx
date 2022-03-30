import React from "react";
import "./style.css";
import Movie from "../Movie";

const MovieList = ({ movies }) => {
  return movies.map((item) => (
    <Movie
      key={item.id}
      title={item.title}
      poster={item.poster}
      year={item.year}
      rating={item.rating}
      director={item.director}
      genre={item.genre}
      cast={item.cast}
    />
  ));
};

export default MovieList;
