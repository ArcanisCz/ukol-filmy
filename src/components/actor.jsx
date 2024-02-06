import React from 'react';
import './actor.css'

const Actor = ({name, as}) => {
return (
<>
 
    <p className="actor"><span className="name">{name}</span> jako {as}</p>
    
    </>)
}

export default Actor;