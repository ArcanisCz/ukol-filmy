import React from "react";
import './style.css';


const Movie = ({title, poster, year, rating, director, genre, cast}) => {
    return (
        <div className="movie">
            <div className="movie__poster">
                <img className="poster" src={`/assets/${poster}`} alt={title} />
            </div>
            <div className="movie__detail">
                <h2 className="movie__title">{title}</h2>
                
                <p><span className="bold">Rok vydání:</span> {year}</p>
                <p><span className="bold">Žánr:</span> {genre}</p>
                <p><span className="bold">Režie:</span> {director}</p>
                <p><span className="bold">Hodnocení:</span> {rating}/10</p>
                
                <h3 className="movie__cast">V hlavních rolích:</h3>
                
            </div>
        </div>
    )
};


export default Movie;