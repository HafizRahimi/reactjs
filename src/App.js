import React,{Component} from "react";

import Person from './components/Person';

import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <h1>Hello World</h1>
                <hr/>
                <Person/>
            </div>
        )
    }
}

export default App;