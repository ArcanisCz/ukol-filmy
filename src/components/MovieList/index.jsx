import React from "react";
import Movie from "../Movie";

const MovieList = ({movies}) => {
    
    return (
        <div className="container">
            {
                movies.map(
                    (movie) => {
                        return <Movie 
                            key={movie.id}
                            title={movie.title}
                            poster={movie.poster}
                            year={movie.year}
                            rating={movie.rating}
                            director={movie.director}
                            genre={movie.genre}
                        />
                    }
                )
            }
        </div>
    )
};

export default MovieList;