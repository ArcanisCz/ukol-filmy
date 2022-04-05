import React from 'react';
import { render } from 'react-dom';
import './style.css';
import Header from './components/Header';
import {movies} from './movies';
import MovieList from './components/MovieList';



const App = () => (
  <>
    <Header title="V našem kině právě uvádíme" />
    <MovieList movies={movies} />
  </>
);

render(<App />, document.querySelector('#app'));
