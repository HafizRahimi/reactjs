
import React from 'react';

const Person = ({firstname, lastname, age, children}) =>{
    return (
        <>
        <p>{`${firstname} ${lastname}`}</p>
        <p>Age:{age}</p>
        {/* props children */}
        <p>{children}</p>
        <hr/>
        </>
    )
}


export default Person;


