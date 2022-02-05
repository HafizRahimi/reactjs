import React, { Component } from 'react';

import Person from './components/Person';

import './App.css';

class App extends Component {
    constructor() {
        super();

        // this.handelPersonsChange = this.handelPersonsChange.bind(this);

        // this.state = {
        //     persons: [
        //         { firstname: 'Hafizullah', lastname: 'Rahimi', age: 20 },
        //         { firstname: 'Hamed', lastname: 'Nori', age: 28 },
        //         { firstname: 'Navid', lastname: 'Alozade', age: 40 },
        //     ],
        // };
    }
    // ES7:  Create a State
    state = {
        persons: [
            { firstname: 'Hafizullah', lastname: 'Rahimi', age: 20 },
            { firstname: 'Hamed', lastname: 'Nori', age: 28 },
            { firstname: 'Navid', lastname: 'Alozade', age: 40 },
        ],
    };
    // method handelPersonsChange
    // handelPersonsChange() {
    //     this.setState({persons :[
    //         { firstname: 'Hafiz', lastname: 'Rahimi', age: 20 },
    //         { firstname: 'Mohammad', lastname: 'Nori', age: 28 },
    //         { firstname: 'Amir', lastname: 'Alozade', age: 40 },
    //     ]});
    // }

    //ES7 Arrow function
    handelPersonsChange = () => {
        this.setState({
            persons: [
                { firstname: 'Hafiz', lastname: 'Rahimi', age: 20 },
                { firstname: 'Mohammad', lastname: 'Nori', age: 28 },
                { firstname: 'Amir', lastname: 'Alozade', age: 40 },
            ],
        });
    };

    render() {
        const { persons } = this.state;
        return (
            <div className="App">
                <h1>Hello React</h1>
                <hr />
                {persons.map((person) => (
                    <Person
                        firstname={person.firstname}
                        lastname={person.lastname}
                        age={person.age}
                    >
                    PropsChildren
                    </Person>
                ))}
                <button onClick={this.handelPersonsChange}>Change It</button>
            </div>
        );
    }
}

export default App;
