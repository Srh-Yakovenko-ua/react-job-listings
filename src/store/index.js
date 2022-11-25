import {legacy_createStore} from 'redux';
import {rootReducer} from './rootReducer';

const REDUX_DEVTOOLS = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

export const store = legacy_createStore(
    rootReducer,
    REDUX_DEVTOOLS
)