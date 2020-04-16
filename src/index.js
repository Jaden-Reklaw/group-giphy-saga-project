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
    yield takeEvery('FETCH_FAVORITES', fetchFavoriteSaga);
    yield takeEvery('FETCH_SEARCH', fetchSearchSaga);
}

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

//Generator Functions Go Here
function* fetchFavoriteSaga(action){
    try{
        const response = yield axios.get('/api/favorite');
        yield put ({type: 'SET_FAVORITES', payload: response.data});
    }
    catch(error){
        console.log('Error in fetchFavoriteSaga', error);
    }
}

function* fetchSearchSaga(action){
    try{
        const response = yield axios.get(`/api/search?q=${action.payload}`);
        yield put ({type: 'SET_SEARCH', payload: response.data});
    }
    catch(error){
        console.log('Error in fetchSearchSaga', error);
    }
}

//Reducers Go Here
const favoriteList = (state = [], action) => {
    if(action.type === 'SET_FAVORITES'){
        return action.payload;
    } else {
        return state;
    }
}

const searchList = (state = [], action) => {
    if(action.type === 'SET_SEARCH'){
        return action.payload;
    } else {
        return state;
    }
}

//Creates redux state for the entire app don't for get to add reducers to the combineReducers
const store = createStore(
    combineReducers({ 
        favoriteList,
        searchList
     }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

//ReactDOM renders to index.html to a div with id react-root
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('react-root'));
