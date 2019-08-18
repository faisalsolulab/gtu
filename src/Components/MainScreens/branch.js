import React from 'react';
import {Text, View, FlatList, StyleSheet, Image, TouchableOpacity, ActivityIndicator} from 'react-native';
import {Card} from 'react-native-elements';
import axios from 'axios';

const URL = 'http://www.codeingking.com/engineeringzone/api/';

export default class Branch extends React.Component{
  constructor(props){
    super(props)
    this.state = {
    branchData:''
    }
  }

  componentDidMount(){
    axios(`${URL}branch/getAllBranch`, {
      method:'POST',
    }).then((res) => {
      console.log('Branchss', res.data)
      this.setState({branchData:res.data})
    })
  }

  render(){
    if(this.state.branchData){
    return(
      <View style={{flex:1}}>
          <View style={{justifyContent:'center',flex:1}}>
                  <Text style={{fontSize:20, fontWeight:'bold', marginTop:'2%', color:'black', marginLeft:'2%'}}>Select Branch</Text>
          </View>
          <View style={{flex:9}}>
              <FlatList
                      data={this.state.branchData}
                      renderItem = {({item}) => {
                            return(
                              <Card>
                                <TouchableOpacity style={{flexDirection:'row', alignItems:'center'}}
                                onPress={() => this.props.navigation.navigate('MaterialList', {branchId:item.id})}>
                                  <Image source={{uri:item.image}} style={styles.logoStyle}/>
                                  <Text style={{fontSize:18, fontWeight:'bold', color:'black'}}>{item.name}</Text>
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
                    }else{
                      return(
                        <View style={{flex:1, marginTop:'50%'}}>
                          <ActivityIndicator size='large' color='green'/>
                        </View>
                      )
                    }
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