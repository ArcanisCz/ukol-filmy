import React from 'react';
import { render } from 'react-dom';
import './style.css';

import Header from './Components/Header/index';

import MovieList from './Components/MovieList';

import movies from './movies.js';

const App = () => (
  <>
    <Header />
    <MovieList films={movies} />
  </>
);

render(<App />, document.querySelector('#app'));
