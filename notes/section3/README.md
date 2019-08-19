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

Here is an example functional component:

```javascript
import React, {useState} from 'react';

const app = (props) => {
	// use array descructure to get the array elements
	// this keyword is not needed since this is a functional component
	// so we can directly use appState anywhere in this component
	const [appState, setAppState] = useState({
		persons: [
			{name: 'John', age: 18},
			{name: 'Doe', age: 18},
			{name: 'Jannie', age: 18},
        ],
	});
	
	const updateAppState = () => {
		setAppState({...})
	}

	return(
		<button Onclick={updateAppState}>Click Me</button>
	);
}

export default app;
```

`useState` returns an array with exactly 2 elements, and always 2 elements. The first element will always be the current state, and the second element will always be a function to update the state, just like `setState`.

The difference between functional component and class component is that, with `setState` in class component, it only mutate the updated state, and will merge the updated state to original state. However, with `updateState` in functional component, it will completely replace the state with new state.

In this case, we can use multiple `useState`, for example:

```javascript
import React, {useState} from 'react';

const app = (props) => {
	// use array descructure to get the array elements
	// this keyword is not needed since this is a functional component
	// so we can directly use appState anywhere in this component
	const [appState, setAppState] = useState({
		persons: [
			{name: 'John', age: 18},
			{name: 'Doe', age: 18},
			{name: 'Jannie', age: 18},
        ],
	});
	
	// useState can take in string or object
	const [otherState, setOtherState] = useState('some other state');
	
	// it will log both state in console
	console.log(appState, otherState);
	
	const updateAppState = () => {
		setAppState({...})
	}

	return(
		<button Onclick={updateAppState}>Click Me</button>
	);
}

export default app;
```

## 45. Passing Method References Between Components

```javascript
class App extends Component {

	switchNameHandler = newName => {
		...
	}
	
	...
	
	render() {
		const {name, age} = this.state;
		return(
			...
			<button onClick={this.switchNameHandler}>Switch Name</button>
			<Person 
				name={name}
				age={age}
				click={this.switchNameHandler}
			/>
		)
	}
}

const Person = props => {
	return (
		<div>
			<p onClick={props.click}> I'm {props.name} and I'm {props.age} years old </p>
		</div>
	)
}
```


In the code above, once the paragraph is clicked, it triggers the `switchNameHandler` and therefore update whatever updates in the `switchNameHandler`. However, in this step, the change is hard coded, in order to dynamically update the value in the handler, there are 2 ways of doing that, 1st, use `bind`:

```javascript
	...
	<button onClick={this.switchNameHandler.bind(this, 'Some Value')}>Switch Name</button>
	...
```

In this case, when click on this button, the value will be updated to `Some Value` since it is passed here.

Another way of doing binding, is through arrow function:

```javascript
	...
	<button onClick={() => this.switchNameHandler('Another Value')}>Switch Name</button>
	...
```

If the function body only contains 1 line, the `return` keyword is explicitly here. What happens here is that the function is passed here, so the react DOM does not execute the function immediately after render the page to DOM. It is easier to pass value than using binding previously. However, even though it seems easier, it is not cost efficient as React can render components too oftenly. Hence, using `bind()` is more recommended.

## 46. Adding Two Way Binding

```javascript
	updateValueHandler = (event) => {
		this.setState ({
			persons: [
				{name: event.target.value},
			]
		})
	}
	
	return (
		<input type='text' onChange={updateValueHandler} value = {props.someValue} />
	);
```
