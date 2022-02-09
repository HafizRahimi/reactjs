import React, { Component } from 'react';
import Persons from './components/persons/Persons';

class App extends Component {
    state = {
        persons: [
            { id: 1, firstName: 'یونس', lastName: 'قربانی' },
            { id: 2, firstName: 'حسن', lastName: 'نوری' },
            { id: 3, firstName: 'علی', lastName: 'رحیمی' },
        ],
        stateShow: false,
    };

    handleShowPerson = () => {
        this.setState({ stateShow: !this.state.stateShow });
        // console.log(this.state.stateShow);
    };

    handleDeletePerson = (id) => {
        //filter
        const persons = [...this.state.persons];
        const filteredPersons = persons.filter((p) => p.id !== id);
        this.setState ({ persons: filteredPersons });

    };

    render() {
        const { persons, stateShow } = this.state;

        //inlineStyle
        const styles = {
            textAlign: 'center',
        };
        const buttonStyle = {
            padding: '0.5em',
            fontFamily: 'BYekan',
        };

        let person = null;

        if (stateShow) {
            person = (
                <Persons
                    persons={persons}
                    personDelete={this.handleDeletePerson}
                ></Persons>
            );
        }

        return (
            <div style={styles}>
                <h2>مدیریت اشخاص</h2>
                <h4>تعداد اشخاص {persons.length} نفر می باشد</h4>

                {person}

                <button onClick={this.handleShowPerson} style={buttonStyle}>
                    نمایش اشخاص
                </button>
            </div>
        );
    }
}

export default App;
