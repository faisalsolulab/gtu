import React from 'react';
import {Text, View, FlatList, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {Card} from 'react-native-elements';

export default class Branch extends React.Component{
  constructor(props){
    super(props)
    this.state = {
    branchData:[
        {
          id:'1',
          image:'https://i.imgur.com/2nCt3Sbl.jpg',
          data:'Computer Engineering'
        },
        {
          id:'2',
          image:'https://i.imgur.com/lceHsT6l.jpg',
          data:'Mechanical Engineering'
        },
        {
          id:'3',
          image:'https://i.imgur.com/UYiroysl.jpg',
          data:'Civil Engineering'
        },
        {
          id:'4',
          image:'https://i.imgur.com/MABUbpDl.jpg',
          data:'AutoMobile Engineering'
        },
        {
          id:'5',
          image:'https://i.imgur.com/MABUbpDl.jpg',
          data:'AutoMobile Engineering'
        },
        {
          id:'6',
          image:'https://i.imgur.com/MABUbpDl.jpg',
          data:'AutoMobile Engineering'
        },
        {
          id:'7',
          image:'https://i.imgur.com/MABUbpDl.jpg',
          data:'AutoMobile Engineering'
        }, {
          id:'8',
          image:'https://i.imgur.com/MABUbpDl.jpg',
          data:'AutoMobile Engineering'
        },
        {
          id:'9',
          image:'https://i.imgur.com/MABUbpDl.jpg',
          data:'AutoMobile Engineering'
        },
        {
          id:'10',
          image:'https://i.imgur.com/MABUbpDl.jpg',
          data:'AutoMobile Engineering'
        }
    ]
    }
  }
  render(){
    return(
      <View style={{flex:1}}>
          <View style={{justifyContent:'center',flex:1}}>
                  <Text style={{fontSize:20, fontWeight:'bold', marginTop:'2%'}}>Select Branch</Text>
          </View>
          <View style={{flex:9}}>
              <FlatList
                      data={this.state.branchData}
                      renderItem = {({item}) => {
                            return(
                              <Card>
                                <TouchableOpacity style={{flexDirection:'row', alignItems:'center'}}
                                onPress={() => this.props.navigation.navigate('MaterialList')}>
                                  <Image source={{uri:item.image}} style={styles.logoStyle}/>
                                  <Text style={{fontSize:18, fontWeight:'bold'}}>{item.data}</Text>
                                </TouchableOpacity>
                              </Card>
                            )
                      }
                      }
                      keyExtractor={(item) => item.id.toString()}
                      />
               </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  logoStyle:{
    height:60,
    width:60,
    borderRadius:80,
    marginRight:'5%'
  },
})