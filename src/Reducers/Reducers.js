import {LOGIN_USER, REGISTER_USER} from '../Actions/types';

const INITIAL_STATE = {
  loginData:"",
  registerData:""
}

export default (state = INITIAL_STATE, action) => {
  switch(action.type){
    case LOGIN_USER:
      return {...state, loginData:action.payload}
    case REGISTER_USER:
      return {...state, registerData:action.payload}
    default:
      return state;
  }
}