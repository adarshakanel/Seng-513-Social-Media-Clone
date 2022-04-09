import React, { useState, useContext, useRef } from 'react'
import logo from '../Resources/camera.png'
import '../css/SignUp.css';
import { useNavigate } from 'react-router-dom'
import AppContext from '../context/AppContext'

export const SignUp = () => {

    const formVal = {
        email: '',
        fullname: '',
        username: '',
        password: ''
    }

    const url = "http://localhost:5000/user/"
    const [formValues, setFormValues] = useState(formVal)
    const email = useRef();
    const fullname = useRef();
    const username = useRef();
    const password = useRef();

    const [signUpSuccessful, setSignUpSuccessful] = useState(false);

    const navigate = useNavigate();

    function gotoLogin(e) {
        e.preventDefault()
        navigate('/login', { replace: true })
    }

    function createUser(e) {
        let formVals = { email: email.current.value, username: username.current.value, password: password.current.value };
        e.preventDefault()
        fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formVals)
        }).then(response => response.ok ? setSignUpSuccessful(true) && setFormValues(formVals) : null)
        navigate('/login', { replace: true })
        console.log(formVals);
    }

    return (
        <div className="background-div">
            <div className='popup signup-content'>
                <img src={logo} alt='logo' className='logo'></img>
                <p id="signup-prompt-div">
                    Sign up to see posts and photos from your friends
                </p>

                <form className='sign-up-login-form'>
                    <div className='form-fields'>
                        <input type="email" placeholder="Email" className='form-field' ref={email}></input>
                        {/* <input type="text" placeholder="Full Name" className='form-field' ref={fullname}></input> */}
                        <input type="text" placeholder="Username" className='form-field' ref={username}></input>
                        <input type="password" placeholder="Password" className='form-field' ref={password}></input>
                    </div>
                    <button className='submit-btn' onClick={e => createUser(e)}>Sign Up</button>
                </form>
                <div className='offer-login-signup'>
                    <p>Have an account?
                        <div onClick={(e) => { gotoLogin(e) }}>
                            <a href='' >Log in</a>
                        </div>
                    </p>
                </div>
            </div>
        </div >
    )
}

export default SignUp;