// index.js

import React from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {Provider} from 'react-redux';

import {dataStore, persistor} from './src/reduxservices/store';

import {PersistGate} from 'redux-persist/integration/react';

// Wrap your App component with Redux Provider and PersistGate
const MyAppRedux = () => (
  <Provider store={dataStore}>
    <PersistGate persistor={persistor} loading={null}>
      <App />
    </PersistGate>
  </Provider>
);

// Register the main component with the AppRegistry
AppRegistry.registerComponent(appName, () => MyAppRedux);
