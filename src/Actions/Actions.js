import { LOGIN_USER, REGISTER_USER } from "./types";
import { Alert } from "react-native";
import axios from "axios";

const URL = "http://www.codeingking.com/engineeringzone/api/";

export const loginUser = (email, password, navigation) => {
  console.log("LO", email, password);
  return dispatch => {
    fetch("http://www.codeingking.com/engineeringzone/api/login/loginCheck", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email: email,
        password: password
      })
    }).then(response => response.json())
    .then(response => {
      console.log('Data Login',response);
    })
  };
};

export const registerUser = (fullName, email, mobile, password) => {
  return dispatch => {
    console.log("ACTION DATA", fullName, email, mobile, password);
    fetch(`${URL}registration/addUser`, {
      method: "POST",
      body: JSON.stringify({
        fname: fullName,
        lname: fullName,
        email: email,
        mobile: mobile,
        password: password,
        gender: "None",
        type: "Student",
        status: 1,
        branch: "NewRanip"
      })
    }).then(res => {
      console.log("REGISTER", res);
      if (res.status == 404) {
        Alert.alert("Something went wrong. Please Try Again!");
      }
      if (res.status == 200) {
        Alert.alert("Registered Successfully");
      }
    });
  };
};
