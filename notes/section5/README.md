# Styling React Components & Elements

## 64. Outlining the Problem Set

With the inline styling in JSX, the advantage is that the style is only applied to the specific class, the disadvantage is that the psudo-selector will not work on it. With external CSS file, the psudo-selector will work, but CSS style will affect all the components.

## 65. Setting Styles Dynamically

Assume that `style` is defined as `let style = {backgroundColor: 'green'};`, it can be altered as:

```javascript
...
const style = {
    backgroundColor: 'green',
};

style.backgroundColor = 'red';
```

At this point, the background color has been changed to red color.

## 66. Stting Class Names Dynamically

Assume that css file looks like below:

```css
.red {
    color: red;
}

.bold {
    font-weight: bold;
}
```

The content in React looks like:

```javascript
...
let classes = ['red', 'bold'].join(' '); //result is"red bold"

<p className={classes}>Red & Bold</p>
```
`Red & Bold` will be red and bold.

## 67. Adding and Using Radium

Download radium by `npm install --save radium`. The example looks like:

```javascript
import Radium from 'radium';

...
const style = {
    backgroundColor: 'green',
    ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black',
    },
};
 ...
    style.backgroundColor = 'red';
    style[':hover'] = {
        backgroundColor: 'salmon',
        color: 'black',
    }

...

// higher order component
// component wrapping component
export defaul Radium{App};
```

## 68. Using Radium for Media Queries

Wrapping component with `Radium` is not engough for psudo-selector.

```javascript
import Radium, {StyleRoot} from 'radium';

...
const style = {
    '@media (min-width: 500px)': {
        width: '450px',
    }
}

return (
    <StyleRoot>
        ...
    </StyleRoot>
)
...
export default Rdadium(...);
```

## 70. Enabling & Using CSS Modules

[Adding a CSS Modules Stylesheet](https://create-react-app.dev/docs/adding-a-css-modules-stylesheet), with newer version of `create-react-app`, `eject` became unnecessary.

With the newer setting, while css files can be directly imported, css modules, `filename.module.css`, can also been imported as well.

## 72. Adding Psudo Selectors

Psudo-selector works properly in the css module style.

Here's the example from the code:

```css
.App button {
    background-color: green;
    color: white;
    font: inherit;
    border: 1px solid blue;
    padding: 8px;
    cursor: pointer;
}

.App button:hover {
    background-color: lightgreen;
    color: black;
}

.App button.Red {
    background-color: red;
}

.App button.Red:hover {
    background-color: salmon;
    color: black;
}
```

Which all works properly.

## 73. Working with Media Queries

With the newer version of React, since it supports both css and css modules.
