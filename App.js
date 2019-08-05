
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import SwitchNavigator from './src/Components/MainScreens/MainNavigator';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import Reducers from './src/Reducers';
import ReduxThunk from 'redux-thunk';

const store = createStore(Reducers, {}, applyMiddleware(ReduxThunk));

export default class App extends Component{
  
  render() {
    return (
      <Provider store = {store}>
        <SwitchNavigator/>
      </Provider>
    );
  }
}


