import React from 'react';
import {Text, View, FlatList, StyleSheet, Image, TouchableOpacity} from 'react-native';

export default class Material extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      dataMaterial:[
        {
          id:'1',
          image:'https://i.imgur.com/2nCt3Sbl.jpg'
        },
        {
          id:'2',
          image:'https://i.imgur.com/lceHsT6l.jpg',
        },
        {
          id:'3',
          image:'https://i.imgur.com/MABUbpDl.jpg'
        },
        {
          id:'4',
          image:'https://i.imgur.com/UYiroysl.jpg'
        }
      ],
    }
  }

  render(){
    return(
      <View style={{flex:1}}>
        <View style={{justifyContent:'center', marginBottom:'4%', flex:1}}>
                <Text style={{fontSize:20, fontWeight:'bold', color:'black'}}>Latest Materials</Text>
        </View>
        <View style={{flex:9}}>
              <FlatList
                data={this.state.dataMaterial}
                renderItem={
                  ({item}) => {     
                    return( 
                      <TouchableOpacity >
                        <Image source={{uri:item.image}} style={styles.imageMaterialStyle}/>
                      </TouchableOpacity>
                    )}}
                horizontal={true}
                keyExtractor={(item) => item.id.toString()}
                showsHorizontalScrollIndicator={false}
              />
          </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  imageMaterialStyle:{
    height:120,
    width:250,
    marginRight:15,
  },
})