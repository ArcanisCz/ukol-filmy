import React from "react";
import "./style.css";

const Actor = ({ name, as }) => {
  return (
    <div className="actor__container">
      <div className="actor__name">{name}</div>
      jako
      <div className="actor__as">{as}</div>
    </div>
  );
};

export default Actor;
