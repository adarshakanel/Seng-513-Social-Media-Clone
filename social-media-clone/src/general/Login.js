import React from 'react'
import logo from '../Resources/camera.png'
import { useState, useContext, useRef, useEffect } from 'react'
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
    const { loggedIn, isLoggedIn, userInfo, setUserInfo } = useContext(AppContext)
    function LogIn(e) {
        e.preventDefault();
        fetch(url + 'login',
            {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email: email.current.value, password: password.current.value })
            })
            // .then(response => response.ok ? isLoggedIn(true
            .then(response => response.ok ? isLoggedIn({ loggedIn: true }, isnowLoggedIn()) : null)

    }
    function isnowLoggedIn() {
        // console.log(email.current.value)
        fetch(url + 'findId',
            {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email: email.current.value })
            })
            .then(response => response.json())
            .then(data => setUserInfo({
                ...userInfo, userId: data._id,
                fullName: data.username,
                pfp: "http://res.cloudinary.com/dmieyzfqg/image/upload/v1647892980/513-social-media-clone/kfkhr70nrwensq2q1zer.webp"
            }))
        // userInfo({ loggedIn: true })
        navigate('/user/', { replace: false })

    }

    // useEffect(() => {
    //     if (loggedIn) {
    //         navigate('/user/', { replace: false })
    //     }
    // }, [userInfo])

    const reroute = (e, path) => {
        e.preventDefault();
        navigate(`/${path}`, { replace: false })
    }
    return (
        <div className="background-div">
            <div className='popup login-content'>
                <img src={logo} alt='logo' className='logo' />
                <form className='sign-up-login-form' onSubmit={(e) => null}>
                    <div className='form-fields'>
                        <input type="text" placeholder={userLoginInfo.username}
                            className='form-field' ref={email} ></input>
                        <input type="password" placeholder={userLoginInfo.password}
                            className='form-field' ref={password}></input>
                    </div>
                    <button className='submit-btn' onClick={(e) => LogIn(e)}>Log In</button>
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