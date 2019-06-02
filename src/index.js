import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app/App';
import * as serviceWorker from './serviceWorker';
// Redux & Reducers.
import { combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';
import firstNumberReducer from './reducers/firstNumberReducer';
import secondNumberReducer from './reducers/secondNumberReducer';
import operationReducer from './reducers/operationReducer';

const reducers = combineReducers({
  firstNumber: firstNumberReducer,
  secondNumber: secondNumberReducer,
  operation: operationReducer
});

export const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

serviceWorker.unregister();
