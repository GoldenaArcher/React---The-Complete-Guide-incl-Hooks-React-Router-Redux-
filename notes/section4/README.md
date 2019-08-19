# Working with Lists and Conditionals

## 52. Rendering Content Conditionally

In the `return` segment inside `render` function, ternary expression will works properly. However, if-else statement will not work here.

```javascript
class App extends Component {
	state={
		persons: [
			{name: 'abc', age: 1},
			{name: 'abcd', age: 1},
			{name: 'abcde', age: 1},
		],
		showPersons: false,
	}
	
	togglePersonsHandler = () => {
		const doesShow = this.state.showPersons;
		this.setState({showPersons: !doesShow});
	}
	
	render() {
		...
		return (
			...
			{showPersons ? <div> a list of persons </div> : null}
		)
	}
}
```

## 53. Handling Dynamic Content "The JavaScript Way"

Ternary expression works when the size of code blocks is relative small. However, if there are multiple logic layers exist here, ternary expression can lead to confusion. However, in the `render` method, if-else is applicable.

```javascript
class App extends Component {
	render() {
		let persons = null;
		if (this.state.showPersons) {
			persons = (
				<div>...</div>
			);
		}
		
		return (
			...
			{persons}
		)
	}
}
```

## 55. Outputting Lists

```javascript
	...
	render() {
		...
		{this.state.persons.map(person => {
			return <Person name={person.name} age={person.age} />;
		})}
	}
```

The anonymous function is passed to the `map` function to do the samething for each element in the list. With the `return` in the `map` function, it returns each element in the list to a JSX element.

## 56. Lists & State

`map` function can also take 2nd parameter, which is the index of the current element in the array. In the example below, 

```javascript
	deletePersonHandler = (personIndex) => {
		const persons = this.state.persons;
		persons.splice(personIndex, 1);
		this.setState({persons: persons});
	}

	...
	{this.state.persons.map{(person, index) => {
		return <Person 
				click={() => this.deletePersonHandler(index)} 
				name={person.name} 
				age={person.age} />;
	}}}
```

Alternative for `click={() => this.deletePersonHandler(index)` is `click={() => this.deletePersonHandler.bind(this, index)}`.

In the code above, once the section is clicked, the person object will be removed from the page.

## 57. Updating State Immutably

In the previous section, in the line `const persons = this.state.persons;`, `persons` and `this.state.persons` are pointing to the same reference. Hence, modifing `persons` will modify `this.state.persons` at the same time, which ultimately can cause unpredictable consequence.

A good practice is to create copy of the state object, and work with the copy of the object.

In this case, `slice` and spread operator, `const persons = [...this.state.persons]`, can be used to create a new copy of the original object. Now, the copy of the state can be safely modified without affecting the current state.

It is always recommended to modify state in an immutable fashion.

## 58. Lists & Keys

```javascript
	...
	{this.state.persons.map{(person, index) => {
		return <Person 
				key={index}
				click={() => this.deletePersonHandler(index)} 
				name={person.name} 
				age={person.age} />;
	}}}
```

`keys` help to modify the virtual DOM faster as it can easily locate the nodes that needed to be modified in the virtual DOM tree.

It is recommended to use unique value for the key property, typically some unique ID. Index is never a good idea for key, since the index changes each time when values of list change.

## 59. Flexible Lists

```javascript
	state = {
		persons: [
				{id: 'adasdfasdf',name: 'abc', age: 18},
				{id: 'asd',name: 'abc', age: 18},
				{id: 'vaas',name: 'abc', age: 18},
		]
	}

	nameChangedHandler= (event, id) => {
		const personIndex = this.state.persons.findIndex(
				p => { return p.id == id});
		
		// do not mutate the object directly, create a new copy of the object
		const person = {...this.state.persons[personIndex]};
		
		person.name = event.target.value;
		
		const persons = [...this.state.persons];
		persons[personIndex] = person;
		
		this.setState({persons: persons});
	}

	...
	{this.state.persons.map{(person, index) => {
		return <Person 
				key={index}
				click={() => this.deletePersonHandler(index)} 
				name={person.name} 
				age={person.age} 
				changed={(event) => this.nameChangedHandler(event, person.id)} />;
	}}}
```

Updating the state without mutate the state directly.
