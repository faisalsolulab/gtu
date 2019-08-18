import React, { Component } from 'react'
import { Text, View } from 'react-native'
import Pdf from 'react-native-pdf';

export class pdf extends Component {
  render() {
    const URL = this.props.navigation.state.params.material
    return (
    <View style={{flex: 1}}>
      <Pdf ref={(pdf)=>{this.pdf = pdf;}}
        source={{uri:URL}}
        style={{flex: 1}}
        onError={(error)=>{console.log(error);}} 
        />
    </View>
    )}
}

export default pdf
