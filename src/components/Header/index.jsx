import React from 'react';
import camera from './camera.svg';


const Header = ({title}) => {
    return (        
    <h1>
        <img className="logo" src={camera} alt="Logo" />
        {title}
    </h1>  
    )
}
export default Header;