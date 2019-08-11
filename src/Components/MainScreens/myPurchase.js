import React from 'react';
import {Text, View, FlatList, Image, TouchableOpacity, StyleSheet, ActivityIndicator} from 'react-native';
import Header from '../header';
import {Card} from 'react-native-elements';
import axios from 'axios';

const URL = 'http://www.codeingking.com/engineeringzone/api/';

export default class MyPurchase extends React.Component{
  constructor(props){
    super(props)
    this.state = {
    materialData:''
    }
  }

  componentDidMount(){
    axios(`${URL}material/getAllMaterial`, {
      method:'GET',
    }).then((res) => {
      console.log('Material List', res.data)
      this.setState({materialData:res.data})
    })
  }

  render(){
      if(this.state.materialData){
        return(
      <View style={{flex:1}}>
          <Header navigation={this.props.navigation}/>
        <View style={{flex:1, paddingBottom:'2%'}}>
          <FlatList
             data={this.state.materialData}
             renderItem = {({item}) => {
              return(
                <Card containerStyle={{flex:1, padding:0, paddingBottom:10, marginBottom:'5%', borderRadius:20}}>
                    <Image source={{uri:item.image}} style={styles.logoStyle} resizeMode='cover'/>
                    <View style={{marginTop:'2%', marginBottom:'1.5%'}}>
                      <Text style={{fontSize:16, fontWeight:'bold',marginLeft:'5%'}}>Subject: <Text style={{color:'black'}}>{item.subject_name}</Text></Text>
                    </View>
                    <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
                    <Text style={{fontSize:16, fontWeight:'bold', marginLeft:'5%'}}>Subject Code: <Text style={{color:'black'}}>{item.title}</Text></Text>
                      <TouchableOpacity style={{marginLeft:'auto', marginRight:'2%', height:'120%', width:'25%', backgroundColor:'green', borderRadius:15}} onPress={() => this.props.navigation.navigate('pdf')}>
                        <Text style={{fontSize:16, fontWeight:'bold', color:"white", textAlign:'center'}}>Read Now</Text>
                      </TouchableOpacity>
                    </View>
                </Card>
              )
               }}
        keyExtractor={(item) => item.book_id}
        showsVerticalScrollIndicator={false}
          />
        </View>
      </View>
      
    )
  } else{
    return(
      <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
        <ActivityIndicator style={{alignSelf:'center'}}/>
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