import React,{useState} from 'react'
import SignIn from '../login/Sign';
import Signup from '../login/Signup';
const Conditional = () => {
    const[state,setState]=useState({isLoggedin:true});
  return (
    state.isLoggedin?<SignIn/>:<Signup/>
  )
};

export default Conditional;