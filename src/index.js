// Step 1b - import createStore & defaultReducer and create createStore
// Step 1c - import and use Provider and pass Store props to <App> in index.js 

import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { carReducer } from './reducers/carReducer';
import { Provider } from 'react-redux';
import App from './App';
import 'bulma/css/bulma.css';
import './styles.scss';


const store = createStore(carReducer);
console.log ("App-Store", store.getState());

const rootElement = document.getElementById('root');
ReactDOM.render(<Provider store={store}><App /></Provider>, rootElement);
