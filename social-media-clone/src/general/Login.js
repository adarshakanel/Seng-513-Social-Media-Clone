import React from 'react'
import logo from '../Resources/camera.png'
import { useState, useContext } from 'react'
import AppContext from '../context/AppContext'
export const Login = () => {
    const userLoginFormInfo = {
        username: "Username or Email",
        password: "Password"
    }
    const [userLoginInfo, setUserLoginInfo] = useState(userLoginFormInfo)
    const { setIsLoggedIn, getUserInfo, setUserInfo } = useContext(AppContext)
    const logIn = (e) => {
        e.preventDefault();
        console.log(userLoginInfo)
        // will call api
        const success = true
        if (success) {
            setIsLoggedIn(true);
            setUserInfo({ ...getUserInfo })
        }
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
                    <p>Don't have an account? <a href='#'>Sign up</a></p><br />
                    <p><a href='#'>Forgot password?</a></p>
                </div>
            </div>
        </div >
    )
}

export default Login;