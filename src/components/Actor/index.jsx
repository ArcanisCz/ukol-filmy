import React from 'react';
import './style.css';

const Actor = (props) => {
  return (
    <>
      <p>
        <span>{props.name}</span> as {props.as}
      </p>
    </>
  );
};

export default Actor;
