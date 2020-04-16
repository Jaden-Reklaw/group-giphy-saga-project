//Default React 
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';

//Import axios
import axios from 'axios';

//Used to create redux state and create the store to connect to reducers
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

//Used for loggin with redux state
import logger from 'redux-logger';

// Import saga middleware
import createSagaMiddleware from 'redux-saga';
import {takeEvery, put} from 'redux-saga/effects';

//Code need for sagas to work
// Create the rootSaga generator function
function* rootSaga() {
    
}

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

//Generator Functions Go Here

//Reducers Go Here

//Creates redux state for the entire app don't for get to add reducers to the combineReducers
const store = createStore(
    combineReducers({ }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

//ReactDOM renders to index.html to a div with id react-root
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('react-root'));
