import React from "react";
import camera from './camera.svg';

const Header = () => {
    return (
    <>   
        <h1>
            V našem kině právě uvádíme
        </h1>
        <img class="logo" src={camera} alt="Logo" />
    </>
    );
}

export default Header;