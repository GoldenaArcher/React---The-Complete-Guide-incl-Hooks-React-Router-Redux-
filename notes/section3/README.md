# Understanding the Base Features & Syntax

## 31. Creating a Functional Component

Simple JavaScript function which returns JSX/HTML.

Since the function will not be modified, `const` is encouraged to use here.

ES6 syntax:

```javascript
// very important, to import react
import React from 'react';

const person = () => {
    return (
        <p>
            I'm a person.
        </p>
    )
}

// also important, otherwise other components cannot access it
export default person;
```

## 39. Handling Events with Methods

Sample code:

```javascript
class App extends Component {
    ...
    // ES6 style arrow function
    onclickHandler = () => {
        console.log('clicked')
    }
    ...

    render() {
        return (
            ...
            <button Onclick={this.onclickHandler}>Click Me</button>
        )
    }
}
```

Note that, using `Onclick={this.onclickHandler()}` will execute this function immediately after React render it to DOM. On the other hand, `Onclick={this.onclickHandler}` will only render the reference to DOM.

## 41. Manipulating the State

Sample code:

```javascript
class App extends Component {
    ...
    // ES6 style arrow function
    onclickHandler = () => {
        console.log('clicked');
        // Don't do this, react will not change the state.
        this.state.person[0].name = 'something';

        // Use setState to properly mutate the state below
        this.setState({
            persons: [
                {name: 'abc', age: 1},
            ]
        })
    }
    ...
}
```

Without `this` keyword, the state will not be modified in the handler. However, if state is directly manipulated in this way, it will cause warning which says do not mutate state in this way, using `setState` instead.

With `setState`, it will merge the updated content with the existing state. For instance:

```javascript
class App extends Component {
    state = {
        persons: [
            {name: 'John', age: 18},
            {name: 'Doe', age: 18},
        ],
        otherState: 'some other content'
    }

    onclickHandler = () => {
        this.setState({
            persons: [
                {name: 'John', age: 18},
                {name: 'Doe', age: 18},
                {name: 'Jannie', age: 18},
            ],
        })
    }
}
```

The code above has mutated the state in `onclickHandler`. After `onclickHandler` has been executed, the state of `App` will be:

```
persons: [
    {name: 'John', age: 18},
    {name: 'Doe', age: 18},
    {name: 'Jannie', age: 18},
],
otherState: 'some other content'
```

## 43. Using the useState() Hook for State Manipulation

Before version 16.8, state can only be mutated in the class components, but after version 16.8, functional components can also update state as well. 

## 46. Adding Two Way Binding