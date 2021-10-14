import React from 'react';

import './style.css';

const Actor = (props) => {
  return (
    <>
      <div className="name"> {props.name} </div>
      <div className="as"> as {props.as} </div>
    </>
  );
};

export default Actor;
