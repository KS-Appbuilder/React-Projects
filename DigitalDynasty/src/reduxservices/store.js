// reduxservices/store.js

import {configureStore} from '@reduxjs/toolkit';
import {combineReducers} from 'redux';
import {persistReducer, persistStore} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import cartReducer from './action'; // Assuming this is a valid reducer
import favoriteReducer from './favoriteSlice'; // Assuming this is a valid slice
import getApiWithAxios from './Apireducers'; // Assuming this is a valid reducer
import SignupAction from './SignupAction'; // Assuming this is a valid slice
import locationSlice from './locationSlice';
import loginSlice from './loginSlice';
import profileRdeucer from './profileSlice';

// Combine all reducers or slices into a rootReducer
const rootReducer = combineReducers({
  cart: cartReducer,
  favorites: favoriteReducer,
  CallApi: getApiWithAxios,
  authentication: SignupAction,
  location: locationSlice,
  login: loginSlice,
  profile: profileRdeucer,
});

// Define persist configuration
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: [
    'cart',
    'favorites',
    'authentication',
    'location',
    'CallApi',
    'login',
    'profile',
  ],
};

// Wrap rootReducer with persistReducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Configure the Redux store with the persisted reducer
const dataStore = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({serializableCheck: false}),
});

// Create the persisted store
const persistor = persistStore(dataStore);

export {dataStore, persistor}; // Export the configured store and persistor
