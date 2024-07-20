import React from "react";
import UserContext from "../Context/UserContext";
import { useState,useContext } from "react";

const Login = () =>{

    const [username,Setusername]=useState(" ");
    const [password,Setpassword]=useState(" ");
   
    const {Setuser}=useContext(UserContext);

    function handlesubmit(e){
         e.preventDefault();
         Setuser({username,password})
    }

    return(
        <>
        <h1>Login</h1>
        <input value={username} onChange={(e)=>{Setusername(e.target.value)}} type="text" placeholder="Username"></input>
        <input value={password} onChange={(e)=>{Setpassword(e.target.value)}} type="password" placeholder="Password"></input>
        <button onClick={handlesubmit}>Login</button>
        </>
    )
}

export default Login;