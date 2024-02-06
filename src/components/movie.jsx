import React from 'react';
import Actor from './actor'
import './movie.css'

const Movie = ({title, poster, year, rating, director, genre, cast}) => {
    return (
        <div className = "grid-container">
        <div className= "poster">
        <img src={'../assets/' + poster} alt="poster" className="img" />
        </div>
        <div className="rating"><p>{rating}/10</p></div>
        <div className="description">
        <h3>{title}</h3>
        <p><b>Rok vydání</b>: {year}</p>
        <p><b>Žánr</b>: {genre}</p>
        <p><b>Režie</b>: {director}</p>
        <br />
        <h5>V hlavních rolích:</h5>
        {cast.map(item => <Actor key={item.name} name={item.name} as={item.as} />
        )}     
            </div>
        </div>
    )
}

export default Movie;