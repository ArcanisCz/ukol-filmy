import React from "react";
import './style.css';
import Actor from "../Actor";

const Movie = (props) => (
    <div className="movie">
        <span className="poster"><img src={props.poster} alt="poster" /></span>
        <span className="description">
            <span className="title">{props.title}</span>
            <span className="year"><strong>Rok vydání:</strong> {props.year}</span>
            <span className="rating">{props.rating}<span className="smaller">/10</span></span>
            <span className="genre"><strong>Žánr:</strong> {props.genre}</span>
            <span className="director"><strong>Režie:</strong> {props.director}</span>
            <span className="actorsHeading">V hlavních rolích:</span>
            <span className="actorsList">              
                {props.cast.map(actor => 
                    <Actor key={actor.name} name={actor.name} as={actor.as} />
                )}
            </span>    
        </span>
    </div>
) ;

export default Movie;