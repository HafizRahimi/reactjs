import React from 'react';

import Person from './Person';


const Persons = ({persons, personDelete}) => {
    return (
        <div>
            {persons.map((person) => (
                <Person
                    key={person.id}
                    firstName={person.firstName}
                    lastName={person.lastName}
                    deleted={() => personDelete(person.id) } //use arrow Function for the personDelete have property(id) 
                ></Person>
            ))}
        </div>
    );
};

export default Persons;
