import React from 'react';
import {Text, View, FlatList, Image, TouchableOpacity, StyleSheet} from 'react-native';
import Header from '../header';
import {Card} from 'react-native-elements';

export default class MaterialList extends React.Component{
  constructor(props){
    super(props)
    this.state = {
    branchData:[
        {
          id:'1',
          image:'https://i.imgur.com/2nCt3Sbl.jpg',
          title:'Maths 1',
          subjectCode:'2435637',
          price:"Rs.200"
        },
        {
          id:'2',
          image:'https://i.imgur.com/lceHsT6l.jpg',
          title:'Maths 2',
          subjectCode:'2435637',
          price:"Rs.250"
        },
        {
          id:'3',
          image:'https://i.imgur.com/UYiroysl.jpg',
          title:'Maths 3',
          subjectCode:'2435637',
          price:"Rs.230"
        }
    ]
    }
  }
  render(){
    return(
      <View style={{flex:1}}>
          <Header navigation={this.props.navigation}/>
        <View style={{flex:1, paddingBottom:'2%'}}>
          <FlatList
             data={this.state.branchData}
             renderItem = {({item}) => {
              return(
                <Card containerStyle={{flex:1, padding:0, paddingBottom:10, marginBottom:'5%', borderRadius:20}}>
                  <TouchableOpacity 
                  onPress={() => this.props.navigation.navigate('MaterialList')}>
                    <Image source={{uri:item.image}} style={styles.logoStyle} resizeMode='cover'/>
                    <View style={{flexDirection:'row', marginTop:'2%', marginBottom:'1.5%'}}>
                      <Text style={{fontSize:16, fontWeight:'bold', marginRight:"15%", marginLeft:'5%'}}>Subject: {item.title}</Text>
                      <Text style={{fontSize:16, fontWeight:'bold'}}>Subject Code: {item.subjectCode}</Text>
                    </View>
                    <View style={{flexDirection:'row'}}>
                      <Text style={{fontSize:16, fontWeight:'bold',marginRight:"15%", marginLeft:'5%', color:'green'}}>Price: {item.price}</Text>
                      <TouchableOpacity style={{flexDirection:'row'}} onPress={() => this.props.navigation.navigate('Description')}>
                        <Image source={require('../../assets/cart.png')} resizeMode='contain' style={styles.cartStyle}/>
                        <Text style={{fontSize:16, fontWeight:'bold', color:"green"}}>Buy Now</Text>
                      </TouchableOpacity>
                    </View>
                  </TouchableOpacity>
                </Card>
              )
        }
        }
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={false}
          />
        </View>
      </View>
    )
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