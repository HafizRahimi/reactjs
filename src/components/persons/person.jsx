import React from 'react';

import './Person.css'

const Person = ({fullName, deleted, nameChange}) => {
    return (  
        <div className="person">
        <p>{`${fullName}`}</p>
        <input type="text" placeholder={`${fullName}`} onChange={nameChange}></input>
        <button onClick={deleted} >حذف</button>
        </div>
    );
}

export default Person;