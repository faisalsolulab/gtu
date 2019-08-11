import { LOGIN_USER, REGISTER_USER } from "./types";
import { Alert } from "react-native";
import AsyncStorage from '@react-native-community/async-storage';
import axios from "axios";

const URL = "http://www.codeingking.com/engineeringzone/api/";

export const loginUser = (email, password, navigation) => {
  console.log("LO", email, password);
  storeData = async () => {
    try {
      await AsyncStorage.setItem('Login', 'Login')
      await AsyncStorage.getItem('Login').then((value)  => console.log('LOGIN ASYNC', value))
    } catch (e) {
      console.log('ASYN ERROR', e)
    }
  }
  return dispatch => {
    axios(`${URL}login/loginCheck`, {
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      data:{
        email: email,
        password: password
      }
    }).then(response => {
      console.log('Data Login',response.data);
      if(response.data.status == 404){
        Alert.alert('Invalid Email or Password')
      }
      if(response.data.status == 200){
        this.storeData();
        navigation.navigate('Home')
      }
    })
  };
};

export const registerUser = (fullName, mobile, email, password) => {
  return dispatch => {
    console.log("ACTION DATA", fullName, email, mobile, password);
    axios(`${URL}registration/addUser`, {
      method: "POST",
      data:{
        fname: fullName,
        lname: fullName,
        email: email,
        mobile: mobile,
        password: password,
        gender: "None",
        type: "Student",
        status: 1,
        branch: "NewRanip"
      }
    }).then(res => {
      console.log("REGISTER", res.data);
      if (res.data.status == 404) {
        Alert.alert("Something went wrong. Please Try Again!");
      }
      if (res.data.status == 200) {
        Alert.alert("Registered Successfully");
      }
    });
  };
};
