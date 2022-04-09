import React from "react";
import {Link, useNavigate} from "react-router-dom";
import {useState} from 'react'
import {ToastContainer, toast} from 'react-toastify'
import "react-toastify/dist/ReactToastify.css"
import axios from "axios";
import { register } from "../utils/APIRoutes";
function Register() {
    const goto = useNavigate()
    const [submission, setSubmission] = useState({
        username: "",
        email:"",
        password:"",
        confirmPassword:"",
    })

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(checkCredentials()) {
        const {password, username, email} = submission;
        const {data} = await axios.post(register, {
            username,
            email,
            password,
        });
  
        if (data.status === true){
            localStorage.setItem('chat-app-user',JSON.stringify(data.user) )
        }
        goto("/chat")
    }
  };

  const checkCredentials = (e) => {
    const {password, username, email} = submission;
    if (password.length <1){
        toast.error("passwords cannot be length 0", {
            position: "bottom-right",
        });
        return false;
    } else if (username.length <3){
        toast.error("Username too short", {
            position: "bottom-right",
        });
        return false;
    } else if (email=== ""){
        toast.error("blank email", {
            position: "bottom-right",
        });
        return false;
    }
    return true;
  };

  const handleChange = (e) => {
    setSubmission({...submission,[e.target.name]: e.target.value})
  };

  return (
      <>
    <div style={{height: "100vh",
width: "100vw",
display: "flex",
justifyContent: "center",
alignItems: "center"}}>
      <form style={{display: "flex",
    flexDirection: "column",
    gap: "1.5rem",
    backgroundColor: "#cdcdcd",
    padding: "3rem",
    paddingTop: "0rem"}} onSubmit={(e) => handleSubmit(e)}>
        \
        <div>
          <h1>CHAT APP</h1>
        </div>
        <input
        style={{backgroundColor: "white",
        padding: "1rem",
        border: "0.1rem solid #4e0eff",
        outline: "none",
        width: "100%",
        fontSize: "1rem"}}
          type="text"
          placeholder="Username"
          name="username"
          onChange={(e) => handleChange(e)}
        ></input>
        <input
        style={{backgroundColor: "white",
        padding: "1rem",
        border: "0.1rem solid #4e0eff",
        outline: "none",
        width: "100%",
        fontSize: "1rem"}}
          type="email"
          placeholder="Email"
          name="email"
          onChange={(e) => handleChange(e)}
        ></input>
        <input
        style={{backgroundColor: "white",
        padding: "1rem",
        border: "0.1rem solid #4e0eff",
        outline: "none",
        width: "100%",
        fontSize: "1rem"}}
          type="password"
          placeholder="Password"
          name="password"
          onChange={(e) => handleChange(e)}
        ></input>
        <button style={{backgroundColor: "#4e0eff",
    color: "white",
    padding:"1rem",
    fontWeight: "bold",
    border: "3px solid rgba(0,0,0,.4)",
    cursor: "pointer"}} type="submit">Create User</button>
        <span>Already have an account? <Link style={{color: "blue",
      fontWeight: "bold"}} to="/login">Login</Link></span>
      </form>
    </div>
    <ToastContainer></ToastContainer>
    </>
  );
}


export default Register;
