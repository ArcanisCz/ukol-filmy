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


  /** !!! 
    pokud dám export nakonce, tak pak píšu inport bez chlupatých závorek
              export default Actor;
              import Actor from "" ../../

    pokud napíšu export ke constantě tak pak importuji pomocí chlupatých závorek
              export const Actor = ({kjbvalbnvadl}) => 
              import {Actor} from "../../"
 
   */