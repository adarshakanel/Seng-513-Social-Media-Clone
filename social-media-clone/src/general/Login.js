import React from 'react'
import logo from '../Resources/camera.png'
import { useState, useContext } from 'react'
import AppContext from '../context/AppContext'
import { useNavigate } from 'react-router-dom'
import '../css/Login.css';

export const Login = () => {
    const navigate = useNavigate();
    const userLoginFormInfo = {
        username: "Username or Email",
        password: "Password"
    }
    const [userLoginInfo, setUserLoginInfo] = useState(userLoginFormInfo)
    const { isLoggedIn, getUserInfo, setUserInfo } = useContext(AppContext)
    const logIn = (e) => {
        e.preventDefault();
        // will call api
        const success = true
        if (success) {
            isLoggedIn(true);
            setUserInfo({ ...getUserInfo })
            navigate('/user/', { replace: false })
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
                            onChange={change => setUserLoginInfo({ ...userLoginInfo, username: change })} className='form-field'></input>
                        <input type="password" placeholder={userLoginInfo.password}
                            onChange={change => setUserLoginInfo({ ...userLoginInfo, password: change })} className='form-field'></input>
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