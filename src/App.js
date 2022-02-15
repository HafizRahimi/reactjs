import React, { Component } from 'react';
import Persons from './components/persons/Persons';

class App extends Component {
    state = {
        persons: [
            // { id: 1, fullName: 'یونس قربانی' },
            // { id: 2, fullName: 'حسن نوری' },
            // { id: 3, fullName: 'علی رحیمی' },
        ],
        person: "",
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

    handleNameChange = (event, id) =>{
        const {persons: allPersons} =this.state;
        const personIndex = allPersons.findIndex(p => p.id === id);

        const person = allPersons[personIndex];
        person.fullName = event.target.value; //For have things like event send

        console.log(event);
        const persons = [...allPersons];

        persons[personIndex] = person;
        this.setState({persons});
    }

    handleNewPerson = ()=>{
        const persons = [...this.state.persons];
        const person = {
            id: Math.floor(Math.random() * 1000),
            fullName: this.state.person
        }
        persons.push(person);
        this.setState({persons, person:""})

        console.log(this.state.persons);
    }

    setPerson = event =>{
        this.setState({person : event.target.value});
    }

    render() {
        const { persons, stateShow } = this.state;

        //inlineStyle
        const styles = {
            textAlign: 'center',
        };
        // const buttonStyle = {
        //     padding: '0.5em',
        //     fontFamily: 'BYekan',
        // };

        let person = null;

        if (stateShow) {
            person = (
                <Persons
                    persons={persons}
                    personDelete={this.handleDeletePerson}
                    nameChange ={this.handleNameChange}
                ></Persons>
            );
        }

        return (
            <div style={styles}>
                <h2>مدیریت اشخاص</h2>
                <h4>تعداد اشخاص {persons.length} نفر می باشد</h4>

                <div>
                    <input type="text" placeholder="ساخت شخص جدید" style={{direction:"rtl"}} onChange={this.setPerson} value={this.state.person}/>
                    <button onClick={this.handleNewPerson}>اضافه کردن</button>
                </div>

                <button onClick={this.handleShowPerson} className="btn btn-sm btn-success fas fa-plus"/>


                {person}
            </div>
        );
    }
}

export default App;
