import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { filterReducer } from './features/filter/filter-slice'
import { positionsReducer } from './features/positions/positions-slice'
import storage from 'redux-persist/lib/storage'
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import { logger } from 'redux-logger/src'

const persistConfig = {
  key: 'root',
  storage,
}

const rootReducer = combineReducers({
  filters: filterReducer,
  positions: positionsReducer,
})
const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  devTools: true,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(logger)
  },
})

export const persistor = persistStore(store)
