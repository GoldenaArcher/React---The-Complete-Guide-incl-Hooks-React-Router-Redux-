# Refreshing Next Generation JavaScript

## 12. Understanding "let" and "const"

Both `let` and `const` are `var`s as JavaScript only knows `var`. 

It is highly encourage to use `let` and `const` instead of `var` in ES6. `let` indicates that the variable will be changed, whilst `const` indicates that the variable will not be changed.

For instance, the code snippets below will run without any issue:

```javascript
var name = 'john';
console.log(name);

name = 'doe';
console.log(name);
```

```javascript
let name = 'john';
console.log(name);

name = 'doe';
console.log(name);
```

Both code snippets will have same result, which output below context:

> "john"
> 
> "doe"

However, using `const` will be different. For instance, the code below will result following compiler error:

```javascript
const name = 'john';
console.log(name);

name = 'doe';
console.log(name);
```

> "john"
> 
> "TypeError: Assignment to constant variable.
> 
>&nbsp;&nbsp;  &nbsp;&nbsp;at ...

## 13. Arrow Functions

Omits the `function` thus results less code, and since `this` keyword is not used, arrow function will has no issue with it.

The code snippets below have same effect:

```javascript
functionprintName (name) {
    console.log(name);
}

const printName = (name) => {
    console.log(name);
}
```

If only 1 argument is recieved, the parentheses can be removed, and the syntax is: 

```javascript
const variableName = name => {
    console.log(name);
}
```

If the function body only contains one line, curly brackets can be removed. The syntax is:

```javascript
const variableName = name => console.log(name);
```

Which yields shorter and cleaner code.

## Exports and Imports

Create modular JavaScript codes.

Example:

```javascript
const person = {
    name: 'John'
}

export default person

export const clean = () => {};

export const data = 10;

import person from './person';

import {clean} from './file';
```

With the import/exprot default module, JavaScript actually only import/deport the default module, hence the name in the import file is not that important. In the example, it is `import person from './person';`, but JavaScript will also import the same module if the important code is `import ppl from './person';`.

On the other hand, with name export, the name in the import file has to be identical to the epxort file. However, the name can be renamed with the syntax: `import {person as Person} from './file'`, also, important all the name exports with the syntax: `import * as bundled from './file'`.

## 16. Class, Properties and Methods

Constructor is not required, and the function can be replaced by arrow function.

## 17. Spread & Rest Operators

Just `...`.

Spread - Used to split up array elements OR object properties. For example:

```javascript
const newArray = [...oldArray, 1, 2];
const newObject = {...oldObject, newProp: 5};
```

Rest - Used to merge a list of function artuments into an array. For example:

```javascript
function sortArgs(...args) {
    return args.sort();
}
```

## 18. Destructuring

Syntax:

```javascript
// Array Destructuring
[a, b] = ['Hello', 'World']
console.log(a) //Hello

// Object Destructuring
{name} = {name:'John', age:28};
console.log(name) //John
```