import React from "react";
import './style.css';

import camera from './img/camera.svg';

const Header = ({text}) => {
    return (
        <h1>
            <img className="logo" src={camera} alt="Logo" />
            {text}
        </h1>
    )
};

export default Header