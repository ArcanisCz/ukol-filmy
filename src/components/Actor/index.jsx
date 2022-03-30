import React from "react";
import "./style.css";

const Actor = ({ name, as }) => {
    console.log({name, as})
  return (
    <div className="actors">
      <div className="actorName">{name}</div>
      <div className="actorAs">{as}</div>
    </div>
  );
};

export default Actor;
