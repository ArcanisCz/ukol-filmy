import React from 'react';
import { render } from 'react-dom';
import './style.css';

import Header from './components/Header';
import MovieList from './components/MovieList';

import { movies } from './movies.js';

const App = () => (
  <>
    <Header />
    <MovieList film={movies} />

    {/* {movies.map(({ title, poster, year, rating, director, genre }) => {
      return (
        <Movie
          className="movie"
          key={title + director}
          name={title}
          image={poster}
          year={year}
          rating={rating}
          director={director}
          genre={genre}
        />
      );
    })} */}
  </>
);

render(<App />, document.querySelector('#app'));
