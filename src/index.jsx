import React from "react";
import { render } from "react-dom";
import "./style.css";
import Header from "./components/Header";
import MovieList from "./components/MovieList";
import { movies } from "./movies"; 

const App = () => (
  <div className="container">
    <Header title="V našem kině právě uvádíme" />
    <div className="container__movieList">
    <MovieList movies={movies}/>
    </div>
  </div>
);

render(<App />, document.querySelector("#app"));
