# Multi-Page-Felling in a Single-Page-App: Routing

## 228. Absolute vs Relative Paths

`<Link></Link>` will always attach current uri to the root domain, which yields a absolute path, in order to yield a relative path, this approach can be adpoted :

`this.props.match.url + '/some-uri'`

## 232. Extracting Route Parameters

The parameters can be recieved by using below format: `<Route path='/:something-passed-here' component={some-component-rendered-here} />`. `ssomething-passed-here` then the route parameters will appear in `this.props.match.params`.

## 233 Parsing Query Parameters & the Fragment

Query parameters are like: **?something=somevalue**. It can be passed like `<Link to="/my-path?start=5">Go to Start</Link>`, or as below:

```javascript
<Link 
    to={‌{
        pathname: '/my-path',
        search: '?start=5'
    }}
    >Go to Start
</Link>
```

And query parameters will appear in `props.location.search` in the format of key-value pairs as `?start=5`.

The below code snippet can help to reslove this issue:

```javascript
componentDidMount() {
    const query = new URLSearchParams(this.props.location.search);
    for (let param of query.entries()) {
        console.log(param); // yields ['start', '5']
    }
}
```

`URLSearchParams`  is a built-in object, shipping with vanilla JavaScript. It returns an object, which exposes the `entries()`  method. `entries()`  returns an Iterator - basically a construct which can be used in a `for...of...`  loop (as shown above).

When looping through `query.entries()` , you get arrays where the first element is the key name (e.g. start ) and the second element is the assigned value (e.g. 5 ).

Fragment are like: **#something**.

You can pass it easily like this:

`<Link to="/my-path#start-position">Go to Start</Link> `

or

```javascript
<Link 
    to={‌{
        pathname: '/my-path',
        hash: 'start-position'
    }}
    >Go to Start
</Link>
```

React router makes it easy to extract the fragment. You can simply access `props.location.hash`.

As pointed by others, below code might work better in the key-value pair:

```javascript
URLSearchParams.forEach((key, value) => {...})
```

Thx for @Eran

## 238. Creating Dynamic Nested Routes

When using `Route`, React does not re-render the components, it's develops job to respont to the change.

The change can be done and checked in the `compnentDidUpdate()` life cycle method as the `props` passed by `Route` has changed.

## 242. Working with Guards

The idea of guards is that, if the requirement is not met, for instance, the user is not authenticated, then the component will not be rendered.

```javascript
state = {
    auth: false,
}

render() {
    return (
        {this.state.auth ? <Route path='some-path' component={some-component} />: null>}
    )
}
```

## 243. Handling the 404 Case (Unknown Routes)

If no path is specified, then it will catch all unknown routes:

```javascript
<Route render={() => <h1>Not Found</h1> }/>
```

## 244. Loading Routes Lazily

**Code splitting**!!!!

Whenever the component is imported as `import Component from 'somewhere';`, the component will be included in the global bundle. With lazy loading, the component is loaded when it's needed, not upfront.

Below are hoc component: 

```javascript 
import React, {Component} from 'react'

const asyncComponent = (importComponent) => {
    return class extends Component {
            state = {
                components: null
            }

            componentDidMount() {
                importComponent().then(cmp => {
                    this.setState({component: cmp.default});
                });
            }

            render () {
                const C = this.state.component;
                return C ? <C {...this.props} /> : null;
            }
        }
}

export default asyncComponent;
```

Below are how it's being used in other components:

```javascript
// create a function as asyncComponent needs a promise as a parameter
const AsyncNewPost = asyncComponent(() => {
    return import('./NewPost/NewPost');
});

// some other nested structure goes here...
    <Route path='/new-post' component={AsyncNewPost} />
// end of some other nested structure goes here...

```

## 245. Lazy Loading with React Suspense

This is the function added from v16.6.

This is not only useful for routing, also if-else something also works here.

```javascript
import react, {Suspense} from 'react';
// dynamic import
const Posts = React.lazy(() => {'import(./comtainers/Posts')});

// ...some other structure here
    <Route path='posts/'  render={() => 
                                <Suspense fallback={<div>Loading...</div>}><Posts /></Suspense> } />
// ... end of some other structure here
```

Suspense can also be used on components, as snippet below:

```javascript
import react, {Component, Suspense, Fragment} from 'react';

const Posts = React.lazy(() => import('./containers/Posts'));

class App extends Component {
    ...
    render() {
        return (
            <Fragment>
                {this.state.show ? (<Suspense fallback={<div>Loading...</div>}><Posts /> <Suspense>) : <User />}
            </Fragment>
        )
    }
}

```

## 246. Routing and Server Depoyment

If the site is rendered in the sbu directory, remember to set base url:

```javascript
<BrowserRouter basename='/some-base'>
...
</BrowserRouter>
```

