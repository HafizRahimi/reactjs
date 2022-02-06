import React from 'react';

const Person = ({firstName, lastName, age}) => {
    return (  
        <div>
        <p>{`${firstName} ${lastName}`}</p>
        </div>
    );
}

export default Person;