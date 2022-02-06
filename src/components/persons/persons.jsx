import Person from './person';


const Persons = ({persons}) => {
    return (
        <div>
            {persons.map((person) => (
                <Person
                    firstName={person.firstName}
                    lastName={person.lastName}
                    age={person.age}
                ></Person>
            ))}
        </div>
    );
};

export default Persons;
