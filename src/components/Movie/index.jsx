import React from "react";

const Movie = ({title, poster, year, rating, director, gerne}) => {
    return(
        <> 
           <div><img src= {poster} alt={poster} /></div>
            <div>{title}</div>
            <div>{year}</div>
            <div>{gerne}</div>
            <div>{director}</div>
            <div>{rating}</div>
        </>
    )
}

export default Movie;