import React from "react";
import "./style.scss";

const Actor = ({ name, as }) => {
  return (
    <li className="actor">
      <span className="actor__name">{name}</span> as {as}
    </li>
  );
};

export default Actor;
