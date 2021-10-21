import React from 'react';

import camera from './img/camera.svg';

import './style.css';

const Header = () => (
  <h1 className="header">
    <img className="logo" src={camera} alt="Logo" />V našem kině právě uvádíme
  </h1>
);

export default Header;
