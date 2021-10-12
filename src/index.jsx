import React from 'react';
import { render } from 'react-dom';
import './style.css';

import Header from './Header/index';
import Movie from './Movie';
import MovieList from './MovieList';

import movies from './movies.js';

const App = () => (
  <>
    <Header />
    <MovieList films={movies} />
  </>
);

render(<App />, document.querySelector('#app'));
