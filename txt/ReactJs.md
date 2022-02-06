
# **ReactJs**

> <br> **Site :  [ReactJs](https://toplearn.com/c/qxl2 "آموزش جامع ReactJs")**
<br> <br> **Videos : 32**
<br> <br> **Time : 22:35:00** 
<br> <br>

<br>

#### `Dependencies` modules:
- [x] module

<br>

#### `DevDependencies` modules:
- [x] module

<br>

#### `Global` modules:
- [x] module

<br>

#### **Materials :**
- [x] JavaScript
- [x] Git


#### **Help :**
* [Reactjs.org](https://reactjs.org/ "reactjs.org")
* [React Documentation](https://reactjs.org/docs/getting-started.html "reactjs/documentation.org")
* [Create React App](https://create-react-app.dev/ "[reactjs.org](https://create-react-app.dev/)")

<br>

---
## Video 01
مقدمه و معرفی دوره

<br><br>

---
## Video 02
گرفتن بهترین نتیجه از این دوره


<br><br>

---
## Video 03
ساخت محیط کاری

---
### **Part 01**: Introduction
<br>

---
### **Part 02**: Create Workspace On Windows
<br>

---
### **Part 03**: Create Workspace On Linux


<br><br>

---
## Video 04
درباره ریکت و ساختار آن

---
### **Part 01**: Introduction
<br>

---
### **Part 02**: ReactJs And Components
<br>

---
### **Part 03**: Create React App

* [React Documentation](https://reactjs.org/docs/getting-started.html "reactjs/documentation.org")
* [Create React App](https://create-react-app.dev/ "[reactjs.org](https://create-react-app.dev/)")
<br>
<br>

Install Global create-react-app:
```
        npm i -g create-react-app
        npm i -g create-react-app@3.3.0  
```

Uninstall-packages:
```
    npm uninstall -g create-react-app
```

Shows Global Modules Version:
```
    npm ls --global
```
<br>

---
### **Part `04`**: Creating First Project `

<br>

Create Project in Folder:
```
        create-react-app .
```

Create Project and New Folder:
```
        create-react-app FolderName
        create-react-app firstProject
```

Start Project:
```
        npm start
```

<br>

---
### **Part `05`**: React Components

Function Component and class components



<br><br>

---

## `Video 05`
Why JSX

---
### **Part `01`**: Introduction


<br>

---

### **Part `02`**: Why JSX


<br>

---

### **Part `03`**: JSX Rules
<br>

`Rule-1`: Have a root div

`Rule-2`: For add Class to JSX use className:
```JSX
        <div className="App">
            <h1>Hello React</h1>
        </div>
```

`Rule-3`: You have close tag after create it.

`Rule-4`: Comment  in JSX: {/* comment */}

```JSX
        <div className="App">
            <h1>Hello React</h1>{/*Test Comment in JSX */}
        </div>
```

<br><br>

---

## `Video 06`
مباحث پایه ریکت

<br>

---
### **Part `01`**: Introduction


<br>

---
### **Part `02`**: First step

<br>

1- App.js is `Root Component`.

2- index.js is For `render` components in index.html
```JSX
   render(<App/>, document.getElementById("root"));
```

<br>

3- Create a `Class Component`: 
```JSX
import React,{Component} from "react"; //import React and Component

class App extends Component {
    constructor(props) {
        super();
    }
    render() {
        return (
            <div className="App">
                <h1>Hello World</h1>
            </div>
        )
    }
}
```

<br>

---
### **Part `03`**: Child Component

1- Create the componentsFolder in srsFolder
<br>

2- Create Person component (Person.jsx):
```jsx
import React, { Component } from 'react';

class Person extends Component {
    render() { 
        return (
            <p>Hafizullah Rahimi</p>
        );
    }
}

export default Person;
```
<!-- <br> -->

3- Install Extension Simple React Snippets:
```
imrc	(for Import React / Component)
cc	    (for Class Component)
```
4- Install Extension Auto Import - ES6, TS, JSX, TSX


5- App.js:
```jsx
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
```

<br>

---
### **Part `04`**: Function Component

4- Create a `Function Component or Stateless Function Component`:

```JSX
import React from "react"; //import React 

const App = () => {
    return (
        <div className="App">
            <h1>
                Hello React
            </h1>
            <hr/>
            <Person/>
        </div>
    );
}

export default App;
```

Extension Simple React Snippets:
```
sfc     (For Stateless Function Component)
```

<br>

---
### **Part `05`**: Props And Dynamic Data

1- **Dynamic Data**:
```jsx
<p>Age:{Math.floor(Math.random() * 30)}</p>
```

2- **Props**:

>Props are `arguments` passed into React components.
props stands for `properties`.
<br>React Props are like function arguments in JavaScript and attributes in HTML.

1- Create Prop:
```jsx
<Person firstName="Hafiz" lastName="Rahimi" age="22"/>
```
2- Use Prop01:
```jsx
const Person = (props) =>{
    return (
        <>
        <p>{`${props.firstName} ${props.lastName}`}</p> {/* Props */}
        <hr/>
        <p>Age:{Math.floor(Math.random() * 30)}</p>  {/* Dynamic Data */}
        </>
    )
}
```

2- Use Prop02:
```jsx
const Person = ({firstName, lastName, age}) =>{
    return (
        <>
        <p>{`${firstName} ${lastName}`}</p>
        <hr/>
        <p>Age:{age}</p>
        </>
    )
}
```

<br>

---
### **Part `06`**: State in the Class Component

**State**: 
>When we do Change Delete and... a `Data` in the Component, we do state.

**Props**: 
>When we send data from a Component to other Component.

<br>

**Stateless**: 
>Component which has State

**Statefull**:
>Component which has not State

<br>

1- Create a state like a constructor in Class Component:
```jsx
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
```

2- Use the state:
```jsx
{/* <Person firstName="Hafiz" lastName="Rahimi" age="22" /> */}
<Person
    firstname={this.state.persons[0].firstname}
    lastname={this.state.persons[0].lastname}
    age={this.state.persons[0].age}
/>
```

<br>

---
### **Part `07`**: SetState And Events

**setState**:
>When we do Change state to other state in Component.

**Props Children**:

<br>

1- Use setState when we have the state like a constructor in Class Component:
```jsx
    handelPersonsChange() {
        this.setState({persons :[
            { firstname: 'Hafiz', lastname: 'Rahimi', age: 20 },
            { firstname: 'Mohammad', lastname: 'Nori', age: 28 },
            { firstname: 'Amir', lastname: 'Alozade', age: 40 },
        ]});
    }
```

2- And you have use bind() in constructor for the handelPersonsChange method can take (this).

```jsx
    this.handelPersonsChange = this.handelPersonsChange.bind(this);
```

3- Event onClick for handelPersonsChange method:

```jsx
    <button onClick={this.handelPersonsChange}>Change It</button>
```

1- `ES7:` Create a Arrow function and you doesn't use `bind()` :
```jsx
    //ES7: Arrow function
    handelPersonsChange = () =>{
        this.setState({persons :[
            { firstname: 'Hafiz', lastname: 'Rahimi', age: 20 },
            { firstname: 'Mohammad', lastname: 'Nori', age: 28 },
            { firstname: 'Amir', lastname: 'Alozade', age: 40 },
        ]});
    }
```


2- Create a state in ES7:

```jsx
class App extends Component {
    constructor() {
        super();
    };
    
    // ES7: Create a State
    state = {
        persons: [
            { firstname: 'Hafizullah', lastname: 'Rahimi', age: 20 },
            { firstname: 'Hamed', lastname: 'Nori', age: 28 },
            { firstname: 'Navid', lastname: 'Alozade', age: 40 },
        ],
    };

    //ES7 Arrow function
    handelPersonsChange = () =>{
        this.setState({persons :[
            { firstname: 'Hafiz', lastname: 'Rahimi', age: 20 },
            { firstname: 'Mohammad', lastname: 'Nori', age: 28 },
            { firstname: 'Amir', lastname: 'Alozade', age: 40 },
        ]});
    }

    render() {
        const { persons } =this.state;
        return (
            <div className="App">
                <h1>Hello React</h1>
                <hr />
                { persons.map(person =>(
                    <Person firstname={person.firstname} lastname={person.lastname} age={person.age}/>
                ))}
                <button onClick={this.handelPersonsChange}>Change It</button>
            </div>
        );
    }
}
```

1- Props Children:
```jsx
        <Person
            firstname={person.firstname}
            lastname={person.lastname}
            age={person.age}
        >
        PropsChildren
        </Person>
```

2- Use Props Children:
```jsx
const Person = ({firstname, lastname, age, children}) =>{
    return (
        <>
        <p>{`${firstname} ${lastname}`}</p>
        <p>Age:{age}</p>
        {/* props children */}
        <p>{children}</p>
        <hr/>
        </>
    )
}
```

<br><br>

---

## `Video 07`

ساخت اولین پروژه


<br>

---
### **Part `01`**: Introduction

<br>


---
### **Part `02`**: Create Workspace

```
    create-react-app .
```

<br>


---
### **Part `03`**: Create Components With State And Props

<br>


---
### **Part `04`**: Styles And Fonts

<br>

InlineStyle:
```jsx
    <div style={{ textAlign: 'center' }}>
```
Or
```jsx
    render() {
    const { persons } = this.state;
    
    //inlineStyle
    const styles = {
        textAlign: 'center'
    };

    return (
        //inlineStyle use
        <div style={styles}>
            <Persons persons={persons}></Persons>
        </div>
    );
```
<br>

Global style: public/css/style.css then add to index.html

<br>

index.html:
```html
    <link rel="stylesheet" href="css/style.css">
```
<br>

style.css
```css
@font-face {
    font-family: "BYekan";
    src: url("../fonts/BYekan-webfont.eot") format("eot"),
        url("../fonts/BYekan-webfont.woff") format("woff"),
        url("../fonts/BYekan-webfont.ttf") format("truetype");
    font-weight: normal;
    font-style: normal;
}
```

src/index.css: 
```css
    body{
        font-family:'BYekan' !important;
    }
```

<br>


---
### **Part `05`**: 

<br>



<br><br>

---













## `Video 00`


<br><br>

---