import React from 'react'
import logo from '../Resources/camera.png'
export const Login = () => {

    return (
        <div className="background-div">
            <div className='popup login-content'>
                <img src={logo} alt='logo' className='logo' />
                <form className='sign-up-login-form'>
                    <div className='form-fields'>
                        <input type="text" placeholder="Username or Email" className='form-field'></input>
                        <input type="password" placeholder="Password" className='form-field'></input>
                    </div>
                    <button className='submit-btn'>Log In</button>
                </form>
                <div className='offer-login-signup'>
                    <p>Don't have an account? <a href='#'>Sign up</a></p><br />
                    <p><a href='#'>Forgot password?</a></p>
                </div>
            </div>
        </div>
    )
}

export default Login;