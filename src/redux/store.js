import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import {  
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import phoneBookReducer from './phoneBook/phoneBook-reducer';

const middleware = [...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  })]

const store = configureStore({
  reducer: {phoneBook: phoneBookReducer},
  middleware,
  devTools: process.env.NODE_ENV === 'development'
},
)

// eslint-disable-next-line
export default store;
