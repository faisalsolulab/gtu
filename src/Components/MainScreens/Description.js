import React from 'react';
import {Text, View, Image, TouchableOpacity, StyleSheet, ActivityIndicator} from 'react-native';
import Header from '../header';
import { ScrollView } from 'react-native-gesture-handler';
import axios from 'axios';

class Description extends React.Component{

  
  render(){
    console.log('PROPS', this.props.navigation.state.params)
    
    return(
      <View style={{flex:1, backgroundColor:'rgb(240,240,240)'}}>
        <Header navigation={this.props.navigation}/>
        <View style={{flex:1}}>
            <Image source={{uri:this.props.navigation.state.params.image}} style={styles.coverImage} resizeMode='cover'/>
            <View style={{flex:1}}>
              <Text style={{fontSize:25, color:'black', flex:0.3, marginLeft:'3%', marginTop:'2%'}}>Maths 1 {`(Sem-${this.props.navigation.state.params.semesterName})`}</Text>
              <Text style={{fontSize:15, marginLeft:'3%', flex:0.3}}>Subject Code: {this.props.navigation.state.params.subjectCode}</Text>
              <Text style={{fontSize:20, color:'black', flex:0.3,  marginLeft:'3%'}}>Description</Text>
              <ScrollView>
                <Text style={{fontSize:15, color:'black', flex:8, marginLeft:'3%'}}>
                  {this.props.navigation.state.params.description}
                </Text>
              </ScrollView>
              <View style={styles.bottomTab}>
                <Text style={{color:'white', fontSize:20, marginLeft:'5%'}}>Price: ₹{this.props.navigation.state.params.price}</Text>
                <TouchableOpacity style={{marginLeft:'auto', marginRight:'5%'}} onPress={() => this.props.navigation.navigate('paytm', { 
                  price : this.props.navigation.state.params.price,
                  bookId: this.props.navigation.state.params.bookId})}>
                <Text style={{color:'white', fontSize:20, }}>Buy Now</Text>
                </TouchableOpacity>
              </View>
            </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  coverImage:{
    height:'25%',
    width:'100%'
  },
  bottomTab:{
    height:'10%',
    width:'100%',
    backgroundColor:'rgb(0,0,120)',
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center'
  }
})

export default Description;