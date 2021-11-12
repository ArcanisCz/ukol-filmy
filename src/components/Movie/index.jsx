import React from "react";
import './style.css';

const Movie = (props) => (
    <div className="movie">
        <span className="title">{props.title}</span>
        <span className="poster"><img src={props.poster} alt="poster" /></span>
        <span className="year">{props.year}</span>
        <span className="rating">{props.rating}</span>
        <span className="director">{props.director}</span>
        <span className="genre">{props.genre}</span>
    </div>
) ;

export default Movie;