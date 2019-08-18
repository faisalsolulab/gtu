import React from 'react';
import {Text, View, FlatList, Image, TouchableOpacity, StyleSheet, ActivityIndicator} from 'react-native';
import Header from '../header';
import {Card} from 'react-native-elements';
import axios from 'axios';

const URL = 'http://www.codeingking.com/engineeringzone/api/';

export default class MaterialList extends React.Component{
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
      <View style={{flex:1, backgroundColor:'rgb(240,240,240)'}}>
          <Header navigation={this.props.navigation}/>
        <View style={{flex:1, paddingBottom:'2%'}}>
          <FlatList
             data={this.state.materialData}
             renderItem = {({item}) => {
               if(item.branch_id === this.props.navigation.state.params.branchId){
              return(
                <Card containerStyle={{flex:1, padding:0, paddingBottom:10, marginBottom:'5%', borderRadius:20}}>
                  <TouchableOpacity 
                  onPress={() => this.props.navigation.navigate('MaterialList')}>
                    <Image source={{uri:item.image}} style={styles.logoStyle} resizeMode='cover'/>
                    <View style={{marginTop:'2%', marginBottom:'1.5%'}}>
                      <Text style={{fontSize:16, fontWeight:'bold',marginLeft:'5%'}}>Subject: <Text style={{color:'black'}}>{item.subject_name}</Text></Text>
                      <Text style={{fontSize:16, fontWeight:'bold', marginLeft:'5%'}}>Subject Code: <Text style={{color:'black'}}>{item.title}</Text></Text>
                    </View>
                    <View style={{flexDirection:'row'}}>
                      <Text style={{fontSize:16, fontWeight:'bold',marginRight:"15%", marginLeft:'5%', color:'green'}}>Price: ₹{item.discount_price}</Text>
                      <TouchableOpacity style={{flexDirection:'row'}} onPress={() => this.props.navigation.navigate('Description', {
                        bookId:item.book_id,
                        description:item.description,
                        image:item.image,
                        semesterName:item.semester_name,
                        price:item.discount_price,
                        name:item.subject_name,
                        subjectCode:item.title
                      })}>
                        <Image source={require('../../assets/cart.png')} resizeMode='contain' style={styles.cartStyle}/>
                        <Text style={{fontSize:16, fontWeight:'bold', color:"green"}}>Buy Now</Text>
                      </TouchableOpacity>
                    </View>
                  </TouchableOpacity>
                </Card>
              )
               }}
        }
        keyExtractor={(item) => item.book_id}
        showsVerticalScrollIndicator={false}
          />
        </View>
      </View>
      
    )
  } else{
    return(
      <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
        <ActivityIndicator size='large' style={{alignSelf:'center'}} color='green'/>
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