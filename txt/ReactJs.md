
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
### **Part `06`**: 






<br>

---




<br><br>

---


## `Video 00`


<br><br>

---