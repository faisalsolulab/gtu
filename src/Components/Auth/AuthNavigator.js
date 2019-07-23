import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Login from './Login';
import SignUp from './SignUp';
import {createStackNavigator, createAppContainer} from 'react-navigation';

const AuthNavigator = createStackNavigator({
   LoginScreen: Login,
   SignUpScreen:SignUp
},{
  headerMode:'none',
})

const Auth = createAppContainer(AuthNavigator);

export default Auth;