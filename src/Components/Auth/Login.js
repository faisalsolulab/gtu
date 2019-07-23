import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar ,
  Image,
  TextInput,
  TouchableOpacity
} from 'react-native';



export default class Login extends Component {

  constructor(props){
    super(props)
    this.state = {
      Email:"",
      Password:'',
    }
  }

	render() {
		return(
			<View style={styles.container}>
        <View style={styles.logo}>
				<Image style={{width:150, height:150}}
          			source={require('../../assets/logo.png')} resizeMode='contain'/>
          		<Text style={styles.logoText}>Engineering <Text style={{color:'blue', fontSize:20, fontStyle:'italic'}}>Z</Text><Text>one</Text></Text>	
  			</View>
        <View style={styles.TextInputContainer}>
        <TextInput style={styles.inputBox} 
              placeholder="Email"
              placeholderTextColor = "grey"
              keyboardType="email-address"
              onChangeText = {(text) => this.setState({Email:text})}
              />
          <TextInput style={styles.inputBox} 
              placeholder="Password"
              secureTextEntry={true}
              placeholderTextColor = "grey"
              onChangeText = {(text) => this.setState({Password:text})}
              />  
           <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('MainNavigator')}>
             <Text style={styles.buttonText}>Login</Text>
           </TouchableOpacity>   
        </View>  
				<View style={styles.signupTextCont}>
					<Text style={styles.signupText}>Don't have an account yet?</Text>
					<TouchableOpacity onPress={() => this.props.navigation.navigate('SignUpScreen')}><Text style={styles.signupButton}> Signup</Text></TouchableOpacity>
				</View>
			</View>	
			)
	}
}
const styles = StyleSheet.create({
  container : {
    backgroundColor:'white',
    flex: 1,
    alignItems:'center',
    justifyContent :'center'
  },
  logo: {
    flexGrow: 1,
    justifyContent:'flex-end',
    alignItems: 'center'
  },
  logoText : {
  	marginVertical: 15,
  	fontSize:18,
  	color:'black'
  },
  signupTextCont : {
  	flexGrow: 1,
    alignItems:'flex-end',
    justifyContent :'center',
    paddingVertical:16,
    flexDirection:'row'
  },
  signupText: {
  	color:'black',
  	fontSize:16
  },
  signupButton: {
  	color:'black',
  	fontSize:16,
  	fontWeight:'500'
  },
  TextInputContainer : {
    flexGrow: 1,
    justifyContent:'center',
    alignItems: 'center'
  },

  inputBox: {
    width:300,
    backgroundColor:'white',
    borderBottomWidth:1,
    paddingHorizontal:16,
    fontSize:16,
    color:'black',
    marginVertical: 10
  },
  button: {
    width:300,
    elevation:5,
    marginTop:'10%',
    backgroundColor:'white',
    borderWidth:1,
    borderColor:'blue',
     borderRadius: 25,
      marginVertical: 10,
      paddingVertical: 13
  },
  buttonText: {
    fontSize:16,
    fontWeight:'500',
    color:'blue',
    textAlign:'center'
  }
});