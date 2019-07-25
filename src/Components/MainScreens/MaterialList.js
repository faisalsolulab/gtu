import React from 'react';
import {Text, View, FlatList, Image, TouchableOpacity} from 'react-native';
import Header from '../header';

export default class MaterialList extends React.Component{
  render(){
    return(
      <View style={{flex:1}}>
          <Header/>
        <View style={{flex:1}}>
          <FlatList
            
          />
        </View>
      </View>
    )
  }
}