
import React from 'react';

const Person = ({firstname, lastname, age}) =>{
    return (
        <>
        <p>{`${firstname} ${lastname}`}</p>
        <p>Age:{age}</p>
        <hr/>
        </>
    )
}


export default Person;


