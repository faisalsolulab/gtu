import React from 'react';
import {Text, View, FlatList, Image, TouchableOpacity, StyleSheet} from 'react-native';

export default class Header extends React.Component{
  render(){
    return(
     <View style={{height:'7%', justifyContent:'center', borderBottomWidth:1}}>
          <View style={{alignItems:'center'}}>
          <Text style={styles.logoText}>Engineering <Text style={{color:'blue', fontSize:22, fontStyle:'italic'}}>Z</Text><Text style={{fontSize:18}}>one</Text></Text>	
          </View>
          </View>
    )
  }
}

const styles = StyleSheet.create({
  logoText:{
    fontSize:18,
  },
})