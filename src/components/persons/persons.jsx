import React from 'react';

import Person from './Person';


const Persons = ({persons, personDelete, nameChange}) => {
    return (
        <div>
            {persons.map((person) => (
                <Person
                    key={person.id}
                    fullName={person.fullName}
                    deleted={() => personDelete(person.id) } //use arrow Function for the personDelete have property(id) 
                    nameChange={event =>nameChange(event, person.id)}
                ></Person>
            ))}
        </div>
    );
};

export default Persons;
