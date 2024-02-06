import React from 'react';
import Movie from './movie'
import './movieList.css'

const movieList = ({movies}) => (
<div className="movieListContainer">
    {movies.map(({id, title, poster, year, rating, director, genre, cast}) => {
 
        return (
          <Movie 
   key={id}       
   title={title}
   poster={poster}
   year={year}
   rating={rating}
   director={director}
   genre={genre}
   cast={cast}
   />
    )})

}
</div>
)

export default movieList;