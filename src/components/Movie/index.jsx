import React from "react";
import Actor from "../Actor";

import "./style.css";

const Movie = ({ title, poster, year, rating, director, genre, cast }) => {
  return (
    <div className="movies">
      <div className="movie_poster">{poster}</div>¨
      <div className="description">
        <div className="movie_title">{title}</div>
        <div className="movie_year">{year}</div>
        <div className="movie_rating">{rating}</div>
        <div className="movie_director">{director}</div>
        <div className="movie_genre">{genre}</div>
        <div className="movie_cast">
          {cast.map(({ name, as }, i) => (
            <Actor key={i} name={name} as={as} />
                  // toto jsi můžu napsat buď takto (že jsi to vypíšu do závorek a už to tam pak dávám bez tečky) nebo jsi to vypíšu způsobem jak je napsáno v MovieListu

                  /* 
                  {cast.map((actor) => (    // tady pozor pokud tam dám {} tak tam musím dát return!
                    <Actor
                      key={actor.i}
                      name={actor.name}
                      as={actor.as}
                    />
                  ))}
                  */
          ))}
        </div>
      </div>
    </div>
  );
};

export default Movie;
