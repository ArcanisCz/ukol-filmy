import React from "react";
import './style.css';

const Movie = (props) => (
    <div className="movie">
        <span className="poster"><img src={props.poster} alt="poster" /></span>
        <span className="description">
            <span className="title">{props.title}</span>
            <span className="year"><strong>Rok vydání:</strong> {props.year}</span>
            <span className="rating"><strong>Hodnocení:</strong> {props.rating}</span>
            <span className="genre"><strong>Žánr:</strong> {props.genre}</span>
            <span className="director"><strong>Režie:</strong> {props.director}</span>
        </span>
    </div>
) ;

export default Movie;