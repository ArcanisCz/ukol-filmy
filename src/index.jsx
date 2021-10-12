import React from 'react';
import { render } from 'react-dom';
import './style.css';

import Header from './components/Header/index';
import Movie from './components/Movie/index';
import movies from './movies';

const App = () => { 
  console.log(movies);
  return (
    <>
      <Header />
      <div className="movies">
        { movies.map(film => { return <Movie title={film.title} poster={'./assets/' + film.poster} year={film.year} rating={film.rating} director={film.director} genre={film.genre} /> }) }
      </div>
    </>
  );
}

render(<App />, document.querySelector('#app'));
