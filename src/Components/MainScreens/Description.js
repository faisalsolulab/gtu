import React from 'react';
import {Text, View, Image, TouchableOpacity, StyleSheet} from 'react-native';
import Header from '../header';
import { ScrollView } from 'react-native-gesture-handler';

class Description extends React.Component{
  render(){
    return(
      <View style={{flex:1}}>
        <Header navigation={this.props.navigation}/>
        <View style={{flex:1}}>
            <Image source={{uri:'https://i.imgur.com/2nCt3Sbl.jpg'}} style={styles.coverImage} resizeMode='cover'/>
            <View style={{flex:1}}>
              <Text style={{fontSize:25, color:'black', flex:0.3, marginLeft:'3%', marginTop:'2%'}}>Maths 1 {'(Sem-1)'}</Text>
              <Text style={{fontSize:15, marginLeft:'3%', flex:0.3}}>Subject Code: {'200220'}</Text>
              <Text style={{fontSize:20, color:'black', flex:0.3,  marginLeft:'3%'}}>Description</Text>
              <ScrollView>
                <Text style={{fontSize:15, color:'black', flex:8, marginLeft:'3%'}}>
                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                </Text>
              </ScrollView>
              <View style={styles.bottomTab}>
                <Text style={{color:'white', fontSize:20, marginLeft:'5%'}}>Price: Rs.200</Text>
                <TouchableOpacity style={{marginLeft:'40%'}} onPress={() => this.props.navigation.navigate('paytm')}>
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
    backgroundColor:'blue',
    flexDirection:'row',
    alignItems:'center'
  }
})

export default Description;