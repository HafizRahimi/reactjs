import React from 'react';

const Person = ({firstName, lastName, deleted}) => {
    return (  
        <div onClick={deleted} style={{ cursor: "pointer" }}>
        <p>{`${firstName} ${lastName}`}</p>
        </div>
    );
}

export default Person;