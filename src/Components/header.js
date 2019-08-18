import React from 'react';
import {Text, View, FlatList, Image, TouchableOpacity, StyleSheet} from 'react-native';
import {Icon} from 'react-native-elements';

export default class Header extends React.Component{
  render(){
    return(
     <View style={{height:'8%', borderBottomWidth:1, flexDirection:'row', alignItems:'center', backgroundColor:'white'}}>
        <View style={{flexDirection:'row'}}>
          {this.props.routeName == 'Paytm' ? null :
          <Icon name='menu' containerStyle={{marginLeft:'2%'}} onPress={() => this.props.navigation.openDrawer()}/>}
          <View style={{marginLeft: this.props.routeName == 'Paytm' ? '40%' : '30%'}}>
          <Text style={styles.logoText}>Engineering <Text style={{color:'blue', fontSize:22, fontStyle:'italic'}}>Z</Text><Text style={{fontSize:18}}>one</Text></Text>	
          </View>
        </View>
    </View>
    )
  }
}

const styles = StyleSheet.create({
  logoText:{
    fontSize:18,
    color:'black',
  },
})