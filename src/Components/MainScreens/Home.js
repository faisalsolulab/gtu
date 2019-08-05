import React from 'react';
import {View, Text, StyleSheet, Image, Dimensions, FlatList, ScrollView, SafeAreaView} from 'react-native';
import SliderCarousel from './Carousel';
import Branch from './branch';
import Material from './material';
import Header from '../header';

class Home extends React.Component{
  render(){
    return(
      <View style={{flex:1}}>
         <Header navigation={this.props.navigation}/>
        <ScrollView style={{flexGrow:1, margin:'1%', marginBottom:'3%'}} showsVerticalScrollIndicator={false}>
            {/* <View style={{flex:3}}>
                  <SliderCarousel/>
            </View> */}
            <View style={{flex:1}}>
            <View style={{flex:3}}>
              <Material navigation={this.props.navigation}/>
            </View>
            <View style={{flex:7}}>
                  <Branch navigation={this.props.navigation}/>
            </View>
            </View>
    </ScrollView>
    </View>
    )}
}

const styles = StyleSheet.create({
  logoText : {
  	marginVertical: 15,
  	fontSize:20,
  	color:'black'
  }
})
export default Home;