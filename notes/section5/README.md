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

