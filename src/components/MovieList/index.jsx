import React from "react";
import Movie from '/src/components/Movie'


const MovieList = ({movies}) => {
    return (
        <>
        {movies.map (movie =>{return <Movie title={movie.title} poster={"/assets/"+movie.poster}
        year={movie.year} rating={movie.rating} director={movie.director} 
        gerne = {movie.gerne} />})}
        </>
    )
}

export default MovieList;