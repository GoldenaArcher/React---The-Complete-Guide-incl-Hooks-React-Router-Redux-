import React, {Component} from 'react';
import './App.css';

import Person from './Person/Person';

class App extends Component{
    state = {
        persons: [
            {id: '1', name: 'John', age: 39},
            {id: '2', name: 'Doe', age: 29},
            {id: '3', name: 'Tommy', age: 19},
        ],
        showPersons: false,
    }

    // handler -> event handler
    switchNameHandler = (newName) => {
        this.setState({
            persons: [
                {name: newName, age: 18},
                {name: 'Doe', age: 29},
            ]
        })
    }

    nameChangeHandler = (event, id) => {

        const personIndex = this.state.persons.findIndex(p => {
            return p.id === id;
        })
        
        const person = {
            ...this.state.persons[personIndex]
        };
        
        person.name = event.target.value;
        
        const persons = [...this.state.persons];
        persons[personIndex] = person;

        this.setState({
            persons: persons
        })
    }

    togglePersonsHandler = () => {
        const doesShow = this.state.showPersons;
        this.setState({showPersons: !doesShow});
    }
     
    deletePersonHandler = (personIndex) => {
        // direct use slice will mutate state, can use slice or ...
        // const persons = this.state.persons.slice;
        const persons = [...this.state.persons];
        persons.splice(personIndex, 1);
        this.setState({persons: persons})
    }

    render() {
        const {persons, showPersons} = this.state;

        const style = {
            backgroundColor: 'green',
            color: 'white',
            font: 'inherit',
            border: '1px solid blue',
            padding: '8px',
            cursor: 'pointer',
        };

        let personsList = null;

        if (showPersons) {
            personsList = (
                <div>
                    {persons.map((person, index) => {
                        return <Person
                            click={() => this.deletePersonHandler(index)}
                            name={person.name} 
                            age={person.age} 
                            key={person.id} 
                            changed={(event) => this.nameChangeHandler(event, person.id)}/>
                    })}
                    {/* <Person 
                        name={persons[0].name} 
                        age={persons[0].age} />
                    <Person 
                        name={persons[1].name} 
                        age={persons[1].name}
                        click={this.switchNameHandler.bind(this, 'Donny')}
                        changed={this.nameChangeHandler} >My Hobbies: Racing</Person>
                    <Person 
                        name={persons[0].name} 
                        age={persons[0].age} /> */}
                    </div> 
            );
            style.backgroundColor = 'red';
        }

        

        return (
            <div className='App'>
                <h1>Hello World</h1>
                {/* do not add () as react will invoke the function once loaded, rather than treat it as event handler */}
                <button 
                    style={style}
                    onClick={this.togglePersonsHandler}>Swich Name</button>
                {/* anynomous function can cause unnecessary rendering and hence reduce the performance */}
                {/* <button onClick={() => switchNameHandler('Johnny')}>Swich Name</button> */}
                {/* {showPersons ? 
                    <div>
                        <Person 
                            name={persons[0].name} 
                            age={persons[0].age} />
                        <Person 
                            name={persons[1].name} 
                            age={persons[1].name}
                            click={this.switchNameHandler.bind(this, 'Donny')}
                            changed={this.nameChangeHandler} >My Hobbies: Racing</Person>
                        <Person 
                            name={persons[0].name} 
                            age={persons[0].age} />
                    </div> : null } */ }
                    {personsList}
            </div>
        )
    }
}

export default App;