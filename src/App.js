import React, { Component } from 'react';

import Person from './components/Person';

import './App.css';

class App extends Component {
    constructor() {
        super();
        this.state = {
            persons: [
                { firstname: 'Hafizullah', lastname: 'Rahimi', age: 20 },
                { firstname: 'Hamed', lastname: 'Nori', age: 28 },
                { firstname: 'Navid', lastname: 'Alozade', age: 40 },
            ],
        };
    }

    render() {
        const { persons } =this.state;
        return (
            <div className="App">
                <h1>Hello React</h1>
                <hr />
                {/* <Person firstName="Hafiz" lastName="Rahimi" age="22" /> */}
                
                {/* <Person
                    firstname={this.state.persons[0].firstname}
                    lastname={this.state.persons[0].lastname}
                    age={this.state.persons[0].age}
                />
                <Person
                    firstname={this.state.persons[1].firstname}
                    lastname={this.state.persons[1].lastname}
                    age={this.state.persons[1].age}
                />
                <Person
                    firstname={this.state.persons[2].firstname}
                    lastname={this.state.persons[2].lastname}
                    age={this.state.persons[2].age}
                /> */}

                {/* { this.state.persons.map(person =>(
                    <Person firstname={person.firstname} lastname={person.lastname} age={person.age}/>
                ))} */}
                
                { persons.map(person =>(
                    <Person firstname={person.firstname} lastname={person.lastname} age={person.age}/>
                ))}
            </div>
        );
    }
}

export default App;
