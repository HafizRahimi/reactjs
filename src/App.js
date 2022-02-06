import React, { Component } from 'react';
import Persons from './components/persons/persons';

class App extends Component {
    state = {
        persons: [
            { firstName: 'یونس', lastName: 'قربانی' },
            { firstName: 'حسن', lastName: 'نوری'},
            { firstName: 'علی', lastName: 'رحیمی' },
        ],
        stateShow: false,
    };

    handleShowPerson = () =>{
        this.setState({stateShow: !this.state.stateShow});
        console.log(this.state.stateShow);
    }

    render() {
        const { persons, stateShow } = this.state;

        //inlineStyle
        const styles = {
            textAlign: 'center'
        };
        const buttonStyle = {
            padding: '0.5em',
            fontFamily: 'BYekan',
        };

        let person = null;

        if(stateShow){
            person = <Persons persons={persons}></Persons>;
        }

        return (
            <div style={styles}>
                <h2>مدیریت اشخاص</h2>
                <h4>تعداد اشخاص {persons.length} نفر می باشد</h4>
                
                {person}

                <button onClick={this.handleShowPerson} style={buttonStyle}>نمایش اشخاص</button>
            </div>
        );
    }
}

export default App;
