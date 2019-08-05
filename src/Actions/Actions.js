import {LOGIN_USER, REGISTER_USER} from './types';
import axios from 'axios';

const URL = 'http://www.codeingking.com/engineeringzone/api/';

export const loginUser = (email, password) => {
    console.log("LO", email,password)
    return(dispatch) => {
        axios(`${URL}login/loginCheck`, {
            method:'POST',
            data:{
                email:email,
                password:password
            }
        }).then((res) => console.log('LOGIN', res.data))
    }
}

export const registerUser = (fullName, email, mobile, password) => {
    return(dispatch) => {
        console.log('ACTION DATA', fullName, email, mobile, password)
        axios.post(`${URL}registration/addUser`, {
            data:{
                fname:fullName,
                lname:fullName,
                email:email,
                mobile:mobile,
                password:password,
                gender:'None',
                type:'Student',
                status:1,
                branch:'NewRanip'
            }
        }).then((res) => console.log('REGISTER', res.data))
    }
}