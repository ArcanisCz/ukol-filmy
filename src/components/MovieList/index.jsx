import React from "react";
import Movie from "../../components/Movie";

const MovieList = ({ movies }) => {
  return (
    <>
      <div className="movie_list">
        {movies.map((movie) => (
          <Movie
            key={movie.id}
            title={movie.title}
            poster={movie.poster}
            year={movie.year}
            rating={movie.rating}
            director={movie.director}
            genre={movie.genre}
            cast={movie.cast}
          />
        ))}
      </div>
    </>
  );
};

export default MovieList; 
