import React from "react";
import Movie from "../Movie/Movie";
import "./style.scss";

const MovieList = ({ movies, title }) => {
  return (
    <>
      <section className="movie-list">
        <div className="container">
          <h2 className="movie-list__title">{title}</h2>
          <ul className="movie-list__list">
            {movies.map((movie) => (
              <Movie
                key={movie.id}
                title={movie.title}
                poster={movie.poster}
                year={movie.year}
                genre={movie.genre}
                rating={movie.rating}
                director={movie.director}
                cast={movie.cast}
              />
            ))}
          </ul>
        </div>
      </section>
    </>
  );
};

export default MovieList;
