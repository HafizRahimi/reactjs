import Person from './person';


const Persons = ({persons}) => {
    return (
        <div>
            {persons.map((person) => (
                <Person
                    firstName={person.firstName}
                    lastName={person.lastName}
                ></Person>
            ))}
        </div>
    );
};

export default Persons;
