import React from 'react';

const Person = ({firstName, lastName, age}) => {
    return (  
        <div>
        <p>{`${firstName} ${lastName} ${age} سال دارم`}</p>
        </div>
    );
}

export default Person;