import React from "react";
import "./style.scss";
import cameraUrl from "./camera.svg";

const Header = ({ title }) => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__inner">
          <div className="header__logo">
            <img src={cameraUrl} alt="Logo" width={35} height={35} />
          </div>
          <h1>{title}</h1>
        </div>
      </div>
    </header>
  );
};

export default Header;
