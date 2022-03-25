import React from "react";
import './style.css';


const Movie = ({title, poster, year, rating, director, genre, cast}) => {
    return (
        <div className="movie">
            <div className="movie__poster">
                <img className="poster" src={`/assets/${poster}`} alt={title} />
            </div>
            <div className="movie__description">
                <h2 className="movie__title">{title}</h2>
                
                <p>Rok vydání: {year}</p>
                <p>Žánr: {genre}</p>
                <p>Režie: {director}</p>
                <p>Hodnocení: {rating}/10</p>
                
                <h3 className="movie__cast">V hlavních rolích:</h3>
                
            </div>
        </div>
    )
};


export default Movie;