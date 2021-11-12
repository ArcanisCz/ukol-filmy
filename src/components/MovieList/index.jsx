import React from "react";
import './style.css';
import Movie from "../Movie";

const MovieList = ({movies}) => (
    <div className="movieList">
        {movies.map(movie => 
            <Movie 
                key={movie.id} 
                title={movie.title} 
                poster={'./assets/' + movie.poster} 
                year={movie.year} 
                rating={movie.rating} 
                director={movie.director} 
                genre={movie.genre}
            />
        )}
    </div>
) ;

export default MovieList;