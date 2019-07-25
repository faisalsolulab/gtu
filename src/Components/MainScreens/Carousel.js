import React from 'react';
import {View, Text, StyleSheet, Image, Dimensions,TouchableOpacity} from 'react-native';
import Carousel from 'react-native-snap-carousel';

const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');

function wp (percentage) {
  const value = (percentage * viewportWidth) / 100;
  return Math.round(value);
}

const slideWidth = wp(95);
const itemHorizontalMargin = wp(2);
const itemWidth = slideWidth + itemHorizontalMargin * 2;

export default class SliderCarousel extends React.Component{
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
    
      
    }
  }

    _renderItem ({item, index}) {
      return (
              <Image source={{uri:item.illustration}} style={styles.imageStyle}/>
      );
    }

  render(){
    return(
      <TouchableOpacity>
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
      contentContainerCustomStyle={{height:'30%'}}
  />
  </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  imageStyle:{
    height:'100%',
    width:'100%',
  },
})