import React from "react";
import './style.css';

const Actor = ({name, as}) => (
    <span className="actor">
        <span className="actorName"><strong>{name}</strong></span>
        <span className="actorAs">as: {as}</span>
    </span>
);

export default Actor;