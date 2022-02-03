
import React from 'react';

import Person from './components/Person';

import './App.css'


const App = () => {
    return (
        <div className="App">
            <h1>
                Hello React
            </h1>
            <hr/>
            <Person firstName="Hafiz" lastName="Rahimi" age="22"/>
        </div>
    );
}

export default App;