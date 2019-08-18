import React from 'react';
import {View, ActivityIndicator} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

export default class Loader extends React.Component{

  componentWillMount = async () => {
   await AsyncStorage.getItem('Login').then((value) => {
    token = value
    token == 'Login' ? this.props.navigation.navigate('MainNavigator') : this.props.navigation.navigate('Auth')
  })
}
    render(){
        return(
            <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
                <ActivityIndicator size='large' color='green'/>
            </View>
        )
    }
} 