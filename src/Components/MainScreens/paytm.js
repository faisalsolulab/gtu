import React, { Component } from 'react';
import {View, Text, StyleSheet, ActivityIndicator, TextInput, Alert, TouchableOpacity} from 'react-native';
import axios from 'axios';
import Header from '../header';
import {connect} from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';

var email;

class Addmoney extends Component{

    constructor(props){
        super(props)
        this.state = {
            loginData:'',
            name:'',
            mobile:'',
            email:'',
            tranId:'',
            type:'',
        }
    }

    componentWillMount = async() => {
       await AsyncStorage.getItem('LoginData').then((value) => {
        this.setState({loginData:value})
       })
        email = this.state.loginData.split(',');
    }

    submit = () => {
        console.log('EMALA', email, this.state.tranId)
        if(this.state.name && this.state.mobile && this.state.tranId && this.state.type){
        axios('http://codeingking.com/engineeringzone/api/order/addOrder',{
            method:'POST',
            data:{
                login_email:email[0],
                login_name:email[1],
                login_mobile_number:email[2],
                payment_name:this.state.name,
                payment_mobile:this.state.mobile,
                payment_email:this.state.email,
                payment_transaction_id:this.state.tranId,
                payment_type:this.state.type,
                material_id:this.props.navigation.state.params.bookId,
                price:this.props.navigation.state.params.price
            }
        }).then(
            (res) => {
                console.log("PatM", res)
                if(res.data.status == 200){
                    Alert.alert('Registered Successfully', 'Now go to my purchase to view your materials')
                }
            }
        )
        }else {
                Alert.alert('Enter all fields')
        }
    }
    render(){
        console.log('PRPS', this.props)
        return(
        <View style={styles.container}>
            <Header routeName={'Paytm'}/>
            <View style={{flex: 1}}>
                <Text style={{textAlign:'center', fontSize:15, fontWeight:'bold', margin:'2%', color:"black"}}>Enter Details of Payment</Text>
                <TextInput
                    style={{height: 50, backgroundColor: 'white', color: 'black', marginLeft: 0, marginRight:0, marginTop: 20}}
                    value = {this.state.name}
                    onChangeText={(text) => this.setState({name: text})}
                    autoCorrect={false}
                    placeholder=" Enter your name"
                    placeholderTextColor="#727278"
                    keyboardType="numeric"
                />
                <TextInput
                    style={{height: 50, backgroundColor: 'white', color: 'black', marginLeft: 0, marginRight:0, marginTop: 20}}
                    value = {this.state.mobile}
                    onChangeText={(text) => this.setState({mobile: text})}
                    autoCorrect={false}
                    placeholder=" Enter mobile number"
                    placeholderTextColor="#727278"
                    keyboardType="numeric"
                />
                <TextInput
                    style={{height: 50, backgroundColor: 'white', color: 'black', marginLeft: 0, marginRight:0, marginTop: 20}}
                    value = {this.state.email}
                    onChangeText={(text) => this.setState({email: text})}
                    autoCorrect={false}
                    placeholder=" Enter your email"
                    placeholderTextColor="#727278"
                />
                <TextInput
                    style={{height: 50, backgroundColor: 'white', color: 'black', marginLeft: 0, marginRight:0, marginTop: 20}}
                    value = {this.state.tranId}
                    onChangeText={(text) => this.setState({tranId: text})}
                    autoCorrect={false}
                    placeholder=" Enter Transaction Id"
                    placeholderTextColor="#727278"
                />
                <TextInput
                    style={{height: 50, backgroundColor: 'white', color: 'black', marginLeft: 0, marginRight:0, marginTop: 20}}
                    value = {this.state.type}
                    onChangeText={(text) => this.setState({type: text})}
                    autoCorrect={false}
                    placeholder="Payment type eg. Google Pay, Paytm"
                    placeholderTextColor="#727278"
                />
                <TextInput
                    style={{height: 50, backgroundColor: 'white', color: 'black', marginLeft: 0, marginRight:0, marginTop: 20}}
                    autoCorrect={false}
                    value = {this.props.navigation.state.params.price}
                    placeholderTextColor="#727278"
                />
            <TouchableOpacity style={{marginTop: 16, alignItems:'center', justifyContent:'center'}}
            onPress={() => this.submit()}>
                <View style={styles.buttonContainer}>
                    <Text style={styles.upperText}> Submit </Text>
                </View>
            </TouchableOpacity>

        </View>
        </View>
        );
    }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: null,
    height: null,
    backgroundColor:'rgb(240,240,240)'
  },
  buttonContainer:{
    borderRadius: 5,
    backgroundColor: "rgb(0,0,120)",
    width: 200,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 10
    },
    shadowRadius: 10,
    shadowOpacity: 0.2,
  },
  upperText:{
    color:"white",
    fontSize: 15,
  },
});

const mapStateToProps = ({main}) => {
    const loginData = main;
    return {loginData}
}
export default connect(mapStateToProps, null)(Addmoney);