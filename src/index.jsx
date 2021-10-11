import React from 'react';
import { render } from 'react-dom';
import './style.css';

import Header from './Header/index';

import './movies.js';

import MovieList from './MovieList';
import Movie from './Movie/index';


const App = () => (
  <>
    <Header />
    </>
  </>
);

render(<App />, document.querySelector('#app'));
