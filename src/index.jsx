import React from 'react';
import { render } from 'react-dom';
import './style.css';

import Header from './components/Header';
import Movie from './components/Movie';


const App = () => (
  <>
    <Header />
    <Movie title="Ptáčata" poster="./assets/gravity.jpg" year='2021' rating='8' director='FF' genre='rodinný' />
  </>
);

render(<App />, document.querySelector('#app'));
