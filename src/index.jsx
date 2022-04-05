import React from 'react';
import { render } from 'react-dom';
import './style.css';
import Header from './components/Header';
import Movie from './components/Movie';
import movies from './movies';



const App = () => (
  <>
    <Header title="V našem kině právě uvádíme" />
    <div>
    {movies.map((movie) => <Movie 
    key={movie.id}
    title={movie.title} 
    poster={movie.poster}
    year={movie.year}
    rating={movie.rating}
    director={movie.director}
    genre={movie.genre}
    />)}
    </div>
      </>
);

render(<App />, document.querySelector('#app'));
