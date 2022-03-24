import React from "react";
import Actor from "../Actor/Actor";
import "./style.scss";

const Movie = ({ title, year, poster, rating, director, genre, cast }) => {
  return (
    <>
      <article className="movie-card">
        <p
          className={
            rating > 8.5
              ? "movie-card__rating movie-card__rating--highlight"
              : "movie-card__rating"
          }
        >
          {rating} / 10
        </p>
        <div className="movie-card__img">
          <img src={`/assets/${poster}`} alt="" width={300} height={450} />
        </div>
        <div className="movie-card__content">
          <h3 className="movie-card__title">{title}</h3>
          <p>
            <strong>Year: </strong>
            {year}
          </p>
          <p>
            <strong>Genre: </strong>
            {genre}
          </p>
          <p>
            <strong>Director: </strong>
            {director}
          </p>
          <p>
            <strong>Stars: </strong>
          </p>
          <ul className="movie-card__list">
            {cast.map((actor, index) => (
              <Actor key={index} name={actor.name} as={actor.as} />
            ))}
          </ul>
        </div>
      </article>
    </>
  );
};

export default Movie;
