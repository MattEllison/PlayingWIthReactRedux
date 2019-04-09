import React, { Component } from 'react';

import './App.css';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Count from './Count'


const testReducer = (state = 0, action) => {
  switch (action.type) {
    case 'ADD':
      return state + action.Count;
    case 'SUBTRACT':
      return state - action.Count - 1;
    default:
      return state;
  }
};

export const actionCreator = (count) => ({
  type: 'ADD',
  Count: count
})

let store = createStore(testReducer);



class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <header >

            App
          </header>
          <div>
            <Count />
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
