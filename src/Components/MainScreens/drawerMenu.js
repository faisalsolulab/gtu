import React from 'react';
import { View, Text, TouchableWithoutFeedback, StyleSheet } from 'react-native';
import {Icon} from 'react-native-elements';
import AsyncStorage from '@react-native-community/async-storage';

export default class DrawerMenu extends React.Component {
    render(){
        return(
            <View style={{flex:1, margin:'5%'}}>
                <View style={{alignItems:'center', flex:0.8}}>
                    <Text style={styles.logoText}>Engineering <Text style={{color:'blue', fontSize:30, fontStyle:'italic'}}>Z</Text><Text style={{fontSize:25}}>one</Text></Text>	
                </View>
                <View style={{flex:9}}>
               <TouchableWithoutFeedback onPress={() => this.props.navigation.navigate('Home')} style={{alignItems:'center'}}>
                   <View style={styles.titleStyle}>
                        <Icon name='home' size={20}/>
                        <Text style={{color:'black', marginLeft:'2%', fontSize:20}}>Home</Text>
                   </View>
               </TouchableWithoutFeedback>
               <TouchableWithoutFeedback onPress={() => this.props.navigation.navigate('MyPurchase')} style={{alignItems:'center', justifyContent:'center'}}>
                   <View style={styles.titleStyle}>
                        <Icon name='file-download' size={20} type={'material-community'}/>
                        <Text style={{color:'black', marginLeft:'2%', fontSize:20}}>My Purchases</Text>
                   </View>
               </TouchableWithoutFeedback>
               <TouchableWithoutFeedback onPress={() => {
                   AsyncStorage.removeItem('Login')
                   this.props.navigation.navigate('Loader')
                   }} style={{alignItems:'center', justifyContent:'center'}}>
                   <View style={styles.titleStyle}>
                        <Icon name='logout' size={20} type={'material-community'}/>
                        <Text style={{color:'black', marginLeft:'2%', fontSize:20}}>Sign Out</Text>
                   </View>
               </TouchableWithoutFeedback>
               </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    titleStyle:{
        flex:0.08,
        height:'6%',
        marginTop:'5%',
        alignItems:'center',
        borderBottomWidth:0.3,
        flexDirection:'row'
    },
    logoText:{
        fontSize:25,
        color:'black',
      },
})

