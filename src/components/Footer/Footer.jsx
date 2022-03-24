import React from "react";
import "./style.scss";

const Footer = ({ text }) => {
  return (
    <>
      <footer className="footer">
        <div className="container">
          <p>{text}</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
