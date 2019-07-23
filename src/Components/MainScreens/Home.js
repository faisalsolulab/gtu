import React from 'react';
import {View, Text, StyleSheet, Image, Dimensions, FlatList, ScrollView, SafeAreaView} from 'react-native';
import Carousel from 'react-native-snap-carousel';

const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');

function wp (percentage) {
  const value = (percentage * viewportWidth) / 100;
  return Math.round(value);
}

const slideWidth = wp(95);
const itemHorizontalMargin = wp(2);
const itemWidth = slideWidth + itemHorizontalMargin * 2;

class Home extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      data: [
        {
            title: 'Beautiful and dramatic Antelope Canyon',
            subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
            illustration: 'https://i.imgur.com/UYiroysl.jpg'
        },
        {
            title: 'Earlier this morning, NYC',
            subtitle: 'Lorem ipsum dolor sit amet',
            illustration: 'https://i.imgur.com/UPrs1EWl.jpg'
        },
        {
            title: 'White Pocket Sunset',
            subtitle: 'Lorem ipsum dolor sit amet et nuncat ',
            illustration: 'https://i.imgur.com/MABUbpDl.jpg'
        },
        {
            title: 'Acrocorinth, Greece',
            subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
            illustration: 'https://i.imgur.com/KZsmUi2l.jpg'
        },
        {
            title: 'The lone tree, majestic landscape of New Zealand',
            subtitle: 'Lorem ipsum dolor sit amet',
            illustration: 'https://i.imgur.com/2nCt3Sbl.jpg'
        },
        {
            title: 'Middle Earth, Germany',
            subtitle: 'Lorem ipsum dolor sit amet',
            illustration: 'https://i.imgur.com/lceHsT6l.jpg'
        }
    ],
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
        }
    ]
  }
}

  _renderItem ({item, index}) {
    return (
      <View style={{flex:3}}>
        <View style={styles.slide}>
            <Image source={{uri:item.illustration}} style={styles.imageStyle}/>
        </View>
      </View>
    );
}

  render(){
    return(
        <ScrollView style={{flex:1}}>
          <View style={{flex:1}}>
                  <Carousel
                    data={this.state.data}
                    renderItem={this._renderItem}
                    sliderWidth={viewportWidth}
                    itemWidth={itemWidth}
                    inactiveSlideScale={0.6}
                    inactiveSlideOpacity={1}
                    enableMomentum={true}
                    activeSlideAlignment={'start'}
                    activeAnimationType={'spring'}
                    autoplay={true}
                />
         <View style={{flex:2}}>
         <View style={{height:'25%', justifyContent:'center'}}>
           <Text style={styles.titleTextStyle}>Latest Materials</Text>
         </View>
         <View style={{flex:5}}>
         <FlatList
              data={this.state.dataMaterial}
              renderItem={
                ({item}) => {     
                  return( 
                  <View>
                    <Image source={{uri:item.image}} style={styles.imageMaterialStyle}/>
                  </View>
                  )
                }
              }
              horizontal={true}
              keyExtractor={(item) => item.id.toString()}
              showsHorizontalScrollIndicator={false}
              />
              </View>
            </View>
            <View style={{flex:6}}>
              <View style={styles.titleStyle}>
                <Text style={styles.titleTextStyle}>Select Branch</Text>
              </View>
              <View style={{flex:5}}>
              <FlatList
               data={this.state.branchData}
               renderItem = {({item}) => {
                    return(
                      <View style={styles.cardStyle}>
                      <View style={{flexDirection:'row'}}>
                        <Image source={{uri:item.image}} style={styles.logoStyle}/>
                        <Text>{item.data}</Text>
                      </View>
                      </View>
                    )
               }
               }
               keyExtractor={(item) => item.id.toString()}
               />
               </View>
            </View>   
        </View>  
    </ScrollView>
    )}
}

const styles = StyleSheet.create({
    slide:{
      flex:3,
      width:'100%',
      marginTop:'2%',
      marginLeft:'1%'
    },
    title:{
      fontSize:12
    },
    imageStyle:{
      flex:2,
      width:'100%',
    },
    slider:{
      flex:3,
      width:'100%'
    },
    border:{
      borderColor:'grey',
      paddingTop:'5%',
      borderBottomWidth:2
    },
    imageMaterialStyle:{
      height:120,
      width:250,
      marginRight:15,
    },
    logoStyle:{
      height:60,
      width:70,
      borderRadius:80
    },
    titleStyle:{
      height:'10%',
      justifyContent:'center'
    },
    titleTextStyle:{
      fontSize:20,
      fontWeight:'bold',
      color:'black'
    },
    cardStyle:{
      borderWidth:1,
      elevation:1
    }
    
})

export default Home;