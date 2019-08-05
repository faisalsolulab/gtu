import React from 'react';
import {Text, View, TextInput, StyleSheet,Image, TouchableOpacity, Alert, ActivityIndicator} from 'react-native';
import {widthPercentageToDP as Width, heightPercentageToDP as Height} from 'react-native-responsive-screen';
import {Button} from 'react-native-elements';
import {connect} from 'react-redux';
import {registerUser} from '../../Actions';

class SignUp extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      fullName:'',
      MobileNo:"",
      Email:"",
      Password:'',
      ConfirmPassword:""
    }
  }

  submit = () => {
    console.log('BHH');
    
    if(this.state.fullName && this.state.MobileNo && this.state.Email && this.state.Password && this.state.ConfirmPassword){
      this.props.registerUser(this.state.fullName, this.state.MobileNo, this.state.Email, this.state.Password)
    }else{
      return(
        Alert.alert('Please enter all fields')
      )
    }
  }

  render(){
    console.log('PROPS', this.props)
    return(
        <View style={styles.container}>
            <View style={styles.logo}>
				      <Image style={{width:150, height:150}}
          			source={require('../../assets/logo.png')} resizeMode='contain'/>
          		<Text style={styles.logoText}>Engineering <Text style={{color:'blue', fontSize:20, fontStyle:'italic'}}>Z</Text><Text>one</Text></Text>
  		    	</View>
            <View style={styles.TextInputContainer}>
              <TextInput style={styles.inputBox} 
                    placeholder="Full Name"
                    placeholderTextColor = "grey"
                    keyboardType="email-address"
                    onChangeText={(text) => this.setState({fullName:text})}
                    />
                     <TextInput style={styles.inputBox} 
                    placeholder="Mobile No"
                    placeholderTextColor = "grey"
                    keyboardType='phone-pad'
                    onChangeText={(text) => this.setState({MobileNo:text})}
                    />
                     <TextInput style={styles.inputBox} 
                    placeholder="Email"
                    placeholderTextColor = "grey"
                    keyboardType="email-address"
                    onChangeText={(text) => this.setState({Email:text})}
                    />
                     <TextInput style={styles.inputBox} 
                    placeholder="Password"
                    placeholderTextColor = "grey"
                    secureTextEntry={true}
                    onChangeText={(text) => this.setState({Password:text})}
                    />
                    <TextInput style={styles.inputBox} 
                    placeholder="Confirm Password"
                    placeholderTextColor = "grey"
                    secureTextEntry={true}
                    onChangeText={(text) => this.setState({ConfirmPassword:text})}
                    />
                <TouchableOpacity style={styles.button} onPress = {() => this.submit()}>
                  {this.props.registerData.registerData ? 
                  <ActivityIndicator/>
                  :<Text style={styles.buttonText}>Sign Up</Text>
                  }
                </TouchableOpacity>   
             </View>  
				<View style={styles.signupTextCont}>
					<Text style={styles.signupText}>Already have an account?</Text>
					<TouchableOpacity onPress={() => this.props.navigation.navigate('LoginScreen')}><Text style={styles.signupButton}> Sign In</Text></TouchableOpacity>
				</View>
			</View>	
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor:'#455a64',
    flex: 1,
    alignItems:'center',
    justifyContent :'center'
  },
  signupTextCont : {
  	flexGrow: 1,
    alignItems:'flex-end',
    justifyContent :'center',
    paddingVertical:16,
    flexDirection:'row'
  },
  signupText: {
  	color:'rgba(255,255,255,0.6)',
  	fontSize:16
  },
  signupButton: {
  	color:'#ffffff',
  	fontSize:16,
  	fontWeight:'500'
  },
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
})

const mapStateToProps = ({main}) => {
  const registerData = main;
  return {registerData}
}

export default connect(mapStateToProps, {registerUser})(SignUp);