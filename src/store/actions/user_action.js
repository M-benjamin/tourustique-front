import {
  REGISTER_USER,
  SIGN_USER,
} from '../types';

import axios from 'axios';
import { SIGNUP, SIGNIN} from '../../utils/misc';
// import { setTokens } from '../../utils/misc'

export function signIn(data){
  const request = axios({
      method:"POST",
      url:SIGNIN,
      data:{
          email: data.email,
          password: data.password,
          returnSecureToken:true
      },
      headers:{
          "Content-Type":"application/json"
      }
  }).then( response => {
      console.log('RESSSS' , response.data)
      // return response.data
  }).catch(e=>{
      return false
  });

  return {
      type: SIGN_USER,
      payload: request
  }

}

export function signUp(data){
  const request = axios({
      method:"POST",
      url:SIGNUP,
      data:{
          email: data.email,
          password: data.password,
          returnSecureToken:true
      },
      headers:{
          "Content-Type":"application/json"
      }
  }).then( response => {
      return response.data
  }).catch(e =>{
      return false
  })

  return {
      type: REGISTER_USER,
      payload: request
  }
}