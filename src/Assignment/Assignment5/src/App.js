import React, { Component } from 'react';

import Persons from './containers/Persons';

import { createStore, combineReducers } from 'redux';

import personReducer from './store/reducers/person';

import { Provider } from 'react-redux';

class App extends Component {

  render() {
    const app = (<div className="App">
      <ol>
        <li>Turn this app into one which does NOT use local state (in components) but instead uses Redux</li>
      </ol>
      <Persons />
    </div>);

    const rootReducer = combineReducers({
      person: personReducer,
    });

    const store = createStore(rootReducer);

    return (
      <Provider store={store}>
        {app}
      </Provider>
    );
  }
}

export default App;
