import React from "react";
import './style.css';

const Actor = ({name, as}) => (
    <span className="actor">
        <span className="actorName">{name}</span>
        <span className="actorAs">{as}</span>
    </span>
);

export default Actor;