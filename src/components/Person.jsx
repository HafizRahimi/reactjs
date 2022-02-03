
import React from 'react';

// const Person = (props) =>{
//     return (
//         <>
//         <p>{`${props.firstName} ${props.lastName}`}</p> {/* Props */}
//         <hr/>
//         <p>Age:{Math.floor(Math.random() * 30)}</p>  {/* Dynamic Data */}
//         </>
//     )
// }

const Person = ({firstName, lastName, age}) =>{
    return (
        <>
        <p>{`${firstName} ${lastName}`}</p>
        <hr/>
        <p>Age:{age}</p>
        </>
    )
}


export default Person;


