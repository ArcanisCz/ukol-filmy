import React from 'react';
import { render } from 'react-dom';
import './style.css';

import Header from "./components/Header";
import MovieList from "./components/MovieList";

import movies from './movies.js';


const App = () => (
  <>
    <Header text="V našem kině právě uvádíme"/>
    <MovieList movies={movies}/>
  </>
);

render(<App />, document.querySelector('#app'));


//<Movie title="Pulp Fiction" poster="/assets/pulp-fiction.jpg" year="1994" rating="8.9/10" director="Quentin Tarantino" genre="crime, drama"/>
