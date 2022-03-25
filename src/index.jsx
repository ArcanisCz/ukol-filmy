import React from 'react';
import { render } from 'react-dom';
import './style.css';

import Header from "./components/Header";
import Movie from "./components/Movie";
//import MovieList from "./components/MovieList";

import movies from './movies.js';


const App = () => (
  <>
    <Header />
    
    <div className="container">
      {movies.map(
          (movie) => {
              return <Movie 
                  key={movie.id}
                  title={movie.title}
                  poster={movie.poster}
                  year={movie.year}
                  rating={movie.rating}
                  director={movie.director}
                  genre={movie.genre}
              />
          }
      )}      
    </div>

  </>
);

render(<App />, document.querySelector('#app'));


//<Movie title="Pulp Fiction" poster="/assets/pulp-fiction.jpg" year="1994" rating="8.9/10" director="Quentin Tarantino" genre="crime, drama"/>
