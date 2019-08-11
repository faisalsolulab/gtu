import React, { Component } from 'react'
import { Text, View } from 'react-native'
import Pdf from 'react-native-pdf';

export class pdf extends Component {
  render() {
    return (
    <View style={{flex: 1}}>
      <Pdf ref={(pdf)=>{this.pdf = pdf;}}
        source={{uri:'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf'}}
        style={{flex: 1}}
        onError={(error)=>{console.log(error);}} />
    </View>
    )}
}

export default pdf
