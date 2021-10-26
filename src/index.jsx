import React from 'react';
import { render } from 'react-dom';
import './style.css';
import movies from './movies'

import Header from './components/header';
import MovieList from './components/movieList'

const App = () => (
  <>
   <Header />
   <MovieList movies={movies} />
  </>
);

render(<App />, document.querySelector('#app'));
