import React from 'react';
import Movie from '../Movie';

const MovieList = ({movies}) => {
    console.log(movies);
    return(
       movies.map(movie => (
        <Movie 
        key={movie.id}
        title={movie.title} 
        poster={movie.poster}
        year={movie.year}
        rating={movie.rating}
        director={movie.director}
        genre={movie.genre} />))
    )
}

export default MovieList    