import React, { Component } from 'react';
import Persons from './components/persons/persons';

class App extends Component {
    state = {
        persons: [
            { firstName: 'یونس', lastName: 'قربانی', age: 22 },
            { firstName: 'حسن', lastName: 'نوری', age: 34 },
            { firstName: 'علی', lastName: 'رحیمی', age: 18 },
        ],
    };
    render() {
        const { persons } = this.state;
        
        //inlineStyle
        const styles = {
            textAlign: 'center'
        };

        return (
            //inlineStyle
            // <div style={{ textAlign: 'center' }}>
            <div style={styles}>
                <Persons persons={persons}></Persons>
            </div>
        );
    }
}

export default App;
