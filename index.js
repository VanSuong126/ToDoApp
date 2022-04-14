/**
 * @format
 */
import React from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import MainScreen from './Components/Main';
import {Provider} from 'react-redux';
import store from './Components/Redux/store';


const Root = () => (
  <Provider store={store}>
    <MainScreen />
  </Provider>
);
AppRegistry.registerComponent(appName, () => Root);
