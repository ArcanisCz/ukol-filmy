import React from 'react';

const Movie = ({title, poster, year, rating, director, genre, cast}) => {
    return(<>
        <h2 className='movie-title'>{title}</h2>
        <img className='poster' src={`/assets/${poster}`} />
        <p className='year'>Rok: {year}</p>
        <p className='rating'>Hodnocení: {rating}</p>
        <p className='director'>Režisér: {director}</p>
        <p className='genre'>Žánr: {genre}</p>
        </>
    )
}

export default Movie;
