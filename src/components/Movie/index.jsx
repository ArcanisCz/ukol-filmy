import React from "react";
import "./style.css";
import Actor from "../Actor";

const Movie = ({ title, poster, year, rating, director, genre, cast }) => {
  return (
    <div className="movie__container">
     
     <div className="picture__container">
        <img className="movie__poster" src={`assets/${poster}`} alt={poster} />
        </div>

      <div className="movie__description">
      <div className="movie__title">{title}</div>
      <div className="movie__year"> <div className="movie">Rok vydání: </div> {year}</div>
      <div className="movie__rating"> <div className="movie"> Hodnocení: </div> {rating} / 10 </div>
      <div className="movie__director"> <div className="movie"> Režie: </div> {director}</div>
      <div className="movie__genre"> <div className="movie"> Žánr:</div> {genre}</div>
      <p className="movie__roles">V hlavních rolích:</p>
      <div className="actors">
          {cast.map((herec) => {
          return <Actor name={herec.name} 
          as={herec.as} 
                />;
        })} </div>

      </div>
    
    </div>
  );
};

export default Movie;
