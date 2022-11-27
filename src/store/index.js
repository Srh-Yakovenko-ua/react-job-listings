import {legacy_createStore} from 'redux';
import {rootReducer} from './rootReducer';
import {persistStore, persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const REDUX_DEVTOOLS = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['filter', 'positions'],
    // blacklist : ['positions'],
}
const persistedReducer = persistReducer(persistConfig, rootReducer)


export const store = legacy_createStore(
    persistedReducer,
    REDUX_DEVTOOLS
)

export const persistor = persistStore(store)