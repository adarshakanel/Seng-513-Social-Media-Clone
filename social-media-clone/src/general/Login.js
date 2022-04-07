import React from 'react'
import logo from '../Resources/camera.png'
import { useState, useContext, useRef } from 'react'
import AppContext from '../context/AppContext'
import { useNavigate } from 'react-router-dom'
import '../css/Login.css';

export const Login = () => {
    const navigate = useNavigate();
    const email = useRef();
    const password = useRef();
    const { url } = useContext(AppContext)
    const userLoginFormInfo = {
        username: "Email",
        password: "Password"
    }
    const [userLoginInfo, setUserLoginInfo] = useState(userLoginFormInfo)
    const { isLoggedIn, getUserInfo, setUserInfo } = useContext(AppContext)
    const logIn = (e) => {
        e.preventDefault();
        // will call api
        // let success = false;
        // fetch(url + 'login',
        //     {
        //         method: 'POST',
        //         headers: { 'Content-Type': 'application/json' },
        //         body: JSON.stringify({ email: email.current.value, password: password.current.value })
        //     })
        //     .then(response => console.log(response.json()))
        fetch(url + 'login',
            {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email: email.current.value, password: password.current.value })
            })
            .then(response => response.ok ? isLoggedIn = true : email.current.value = "")

        if (isLoggedIn) {
            isLoggedIn(true);


            // setUserInfo({ ...getUserInfo, ...userLoginInfo })
            navigate('/user/', { replace: false })

            // GET THE USER ID HERE, DONT JUST LEAVE IT BLANK

            // setUserInfo({
            //     /* */
            // })
        }
    }
    const reroute = (e, path) => {
        e.preventDefault();
        navigate(`/${path}`, { replace: false })
    }
    return (
        <div className="background-div">
            <div className='popup login-content'>
                <img src={logo} alt='logo' className='logo' />
                <form className='sign-up-login-form'>
                    <div className='form-fields'>
                        <input type="text" placeholder={userLoginInfo.username}
                            className='form-field' ref={email}></input>
                        {/* onChange={change => setUserLoginInfo({ ...userLoginInfo, username: change })} className='form-field'></input> */}
                        <input type="password" placeholder={userLoginInfo.password}
                            className='form-field' ref={password}></input>
                        {/* onChange={change => setUserLoginInfo({ ...userLoginInfo, password: change })} className='form-field'></input> */}
                    </div>
                    <button className='submit-btn' onClick={(e) => logIn(e)}>Log In</button>
                </form>
                <div className='offer-login-signup'>
                    <p>Don't have an account? <div onClick={(e) => reroute(e, "signup")}>
                        <a href="">
                            Sign up
                        </a>
                    </div></p><br />
                    <p>
                        <div onClick={(e) => reroute(e, "forgot")}>
                            <a href=''>Forgot password?</a>
                        </div>
                    </p>
                </div>
            </div>
        </div >
    )
}

export default Login;