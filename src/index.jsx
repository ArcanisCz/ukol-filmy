import React from "react";
import { render } from "react-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import MovieList from "./components/MovieList/MovieList";

import movies from "./movies";

const App = () => (
  <>
    <Header title="Welcome to the Cinema City" />
    <MovieList movies={movies} title="What's on" />
    <Footer text="Copyright © 2022 Cinema City" />
  </>
);

render(<App />, document.querySelector("#app"));
