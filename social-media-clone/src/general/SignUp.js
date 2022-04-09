import React from 'react'
import logo from '../Resources/camera.png'
import '../css/SignUp.css';
import { useNavigate } from 'react-router-dom'
import {useState} from 'react'
import {ToastContainer, toast} from 'react-toastify'
import "react-toastify/dist/ReactToastify.css"
import axios from "axios";
import { register } from "../utils/APIRoutes";

export const SignUp = () => {
    const navigate = useNavigate();

    function gotoLogin(e) {
        e.preventDefault()
        navigate('/login', { replace: true })
    }
    const [submission, setSubmission] = useState({
        username: "",
        email:"",
        password:"",
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
        <div className="background-div">
            <div className='popup signup-content'>
                <img src={logo} alt='logo' className='logo'></img>
                <p id="signup-prompt-div">
                    Sign up to see posts and photos from your friends
                </p>

                <form className='sign-up-login-form' onSubmit={(e) => handleSubmit(e)}>
                    <div className='form-fields'>
                        <input type="email" placeholder="Email" className='form-field' name="email" onChange={(e) => handleChange(e)}></input>
                        <input type="text" placeholder="Full Name" className='form-field'></input>
                        <input type="text" placeholder="Username" className='form-field' name="username" onChange={(e) => handleChange(e)}></input>
                        <input type="password" placeholder="Password" className='form-field' name="password" onChange={(e) => handleChange(e)}></input>
                    </div>
                    <button className='submit-btn'>Sign Up</button>
                </form>
                <div className='offer-login-signup'>
                    <p>Have an account?
                        <div onClick={(e) => { gotoLogin(e) }}>
                            <a href='' >Log in</a>
                        </div>
                    </p>
                </div>
            </div>
            <ToastContainer></ToastContainer>
        </div >
    )
}

export default SignUp;