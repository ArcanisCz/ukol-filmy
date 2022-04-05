import React from 'react';
import './style.css';

const Movie = ({title, poster, year, rating, director, genre, cast}) => {
    console.log(title);
    return(<div className='movie'>
                <div className='grid-header'>
                    <h2 className='movie-title'>{title}</h2>
                </div>
                <div className='left-column'>
                    <img className='poster' src={`/assets/${poster}`} />
                </div>
                <div className='right-column'>
                    <p className='year'>Rok: {year}</p>
                    <p className='rating'>Hodnocení: {rating}</p>
                    <p className='director'>Režisér: {director}</p>
                    <p className='genre'>Žánr: {genre}</p>
                </div>
            </div>
    )
}

export default Movie;
