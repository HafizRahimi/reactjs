import React, { Component } from 'react';
import Persons from './components/persons/Persons';

class App extends Component {
    state = {
        persons: [
            // { id: 1, fullName: 'یونس قربانی' },
            // { id: 2, fullName: 'حسن نوری' },
            // { id: 3, fullName: 'علی رحیمی' },
        ],
        person: '',
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
        this.setState({ persons: filteredPersons });
    };

    handleNameChange = (event, id) => {
        const { persons: allPersons } = this.state;
        const personIndex = allPersons.findIndex((p) => p.id === id);

        const person = allPersons[personIndex];
        person.fullName = event.target.value; //For have things like event send

        console.log(event);
        const persons = [...allPersons];

        persons[personIndex] = person;
        this.setState({ persons });
    };

    handleNewPerson = async () => {
        const persons = [...this.state.persons];
        const person = {
            id: Math.floor(Math.random() * 1000),
            fullName: this.state.person,
        };
        await persons.push(person);
        this.setState({ persons, person: '' });

        console.log(this.state.persons);

        // const personsLength = this.state.persons.length;
        // if (personsLength > 0) {
        //     console.log('kkkkkkkkkkkkkkkkkkkkkkkk');
        //     this.setState({ stateShow: true });
        // }
    };

    setPerson = (event) => {
        this.setState({ person: event.target.value });
    };

    render() {
        const { persons, stateShow } = this.state;


        let person = null;

        if (stateShow) {
            person = (
                <Persons
                    persons={persons}
                    personDelete={this.handleDeletePerson}
                    nameChange={this.handleNameChange}
                ></Persons>
            );
        }

        return (
            <div className="rtl text-center">
                <div className="alert alert-info">
                    <h2>مدیریت اشخاص</h2>
                </div>
                <h5 className="alert alert-light">
                    تعداد اشخاص{' '}
                    <span className="badge badge-pill badge-success ">
                        {persons.length}
                    </span>{' '}
                    نفر می باشد
                </h5>

                <div className="m-2 p-2">
                    <form className="form-inline justify-content-center" onSubmit={event => event.preventDefault()}>
                        <div className="input-group w-25">
                            <input
                                type="text"
                                placeholder="اسم بهم بده"
                                className="form-control"
                                onChange={this.setPerson}
                                value={this.state.person}
                            />
                            <div className="input-group-prepend">
                                <button
                                    type="submit"
                                    onClick={this.handleNewPerson}
                                    className="btn btn-sm btn-success fas fa-plus"
                                />
                            </div>
                        </div>
                    </form>
                </div>

                <button
                    onClick={this.handleShowPerson}
                    className="btn btn-info"
                >
                    نمایش اشخاص
                </button>

                {person}
            </div>
        );
    }
}

export default App;
