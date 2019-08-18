import React from 'react';
import {Text, View, FlatList, Image, TouchableOpacity, StyleSheet, ActivityIndicator} from 'react-native';
import Header from '../header';
import {Card} from 'react-native-elements';
import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';

const URL = 'http://www.codeingking.com/engineeringzone/api/';

export default class MyPurchase extends React.Component{
  constructor(props){
    super(props)
    this.state = {
    materialData:''
    }
  }

  componentDidMount = async() => {
    const loginData = await AsyncStorage.getItem('LoginData')
    const email = loginData.split(',');
    console.log('ASYNCDTA', email[0])
    axios(`http://www.codeingking.com/engineeringzone/api/Mypurchase/purchaselist`, {
      method:'POST',
      data:{
        email:email[0]
      }
    }).then((res) => {
      console.log('Purchase List', res.data)
      this.setState({materialData:res.data})
    })
  }

  render(){
      if(this.state.materialData){
        return(
      <View style={{flex:1, backgroundColor:'rgb(240,240,240)'}}>
          <Header navigation={this.props.navigation}/>
        <View style={{flex:1, paddingBottom:'2%'}}>
          <FlatList
             data={this.state.materialData}
             renderItem = {({item}) => {
              return(
                <Card containerStyle={{flex:1, padding:0, paddingBottom:10, marginBottom:'5%', borderRadius:20}}>
                    <Image source={{uri:item.image}} style={styles.logoStyle} resizeMode='cover'/>
                    <View style={{marginTop:'2%', marginBottom:'1.5%'}}>
                      <Text style={{fontSize:16, fontWeight:'bold',marginLeft:'5%', marginTop:'1%'}}>Subject: <Text style={{color:'black'}}>{item.subject_name}</Text></Text>
                      <Text style={{fontSize:16, fontWeight:'bold', marginLeft:'5%', marginTop:'1%'}}>Subject Code: <Text style={{color:'black'}}>{item.title}</Text></Text>
                      <Text style={{fontSize:16, fontWeight:'bold',marginLeft:'5%', marginTop:'1%'}}>Branch: <Text style={{color:'black'}}>{item.branch_name}</Text></Text>
                    </View>
                    <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
                    <Text style={{fontSize:16, fontWeight:'bold',marginLeft:'5%'}}>Semester: <Text style={{color:'black'}}>{item.semester_name}</Text></Text>
                      <TouchableOpacity style={{marginLeft:'auto', marginRight:'3%', height:'160%', width:'25%', backgroundColor:'green', borderRadius:10}} 
                      onPress={() => this.props.navigation.navigate('pdf', {
                        material:item.material
                      })}>
                        <Text style={{fontSize:16, fontWeight:'bold', color:"white", textAlign:'center', transform:[{translateY:5}]}}>Read Now</Text>
                      </TouchableOpacity>
                    </View>
                </Card>
              )
               }}
        showsVerticalScrollIndicator={false}
          />
        </View>
      </View>
      
    )
  } else{
    return(
      <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
        <ActivityIndicator size='large' color='green' style={{alignSelf:'center'}}/>
      </View>
    )
  }
}
}

const styles = StyleSheet.create({
  logoStyle:{
    height:120,
    width:'100%',
    borderRadius:20
  },
  cartStyle:{
    height:20,
    width:25,
    marginLeft:'15%'
  }
})