import React from "react";
import '../../style.css';

const Movie = (props) => {
    return (
    <>
        <div className="film">
            <div className="film-img">
                <img src={props.poster} />
            </div>
            <div className="film-content">
                <h1>{props.title}</h1>
                <p>Rok vydání: {props.year}</p>
                <p className="rating">{props.rating}</p>
                <p>Režie: {props.director}</p>
                <p>Žánr: {props.genre}</p>
            </div>
        </div>
    </>
    );
}

export default Movie;