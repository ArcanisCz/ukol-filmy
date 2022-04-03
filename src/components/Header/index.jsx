import React from "react";
import "./style.css";
import logo from "./img/camera.svg";

const Header = ({ title }) => {
  return (
    <div className="header">
      <h1 className="header__title">{title}</h1>
      <img className="logo" src={logo} />
    </div>
  );
};

export default Header;
