import React from "react";
import "./style.scss";

const Header = ({ title }) => {
  return (
    <>
      <header className="header">
        <div className="container">
          <div className="header__inner">
            <div className="header__logo">
              <img src="/assets/camera.svg" alt="Logo" width={35} height={35} />
            </div>
            <h1>{title}</h1>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
