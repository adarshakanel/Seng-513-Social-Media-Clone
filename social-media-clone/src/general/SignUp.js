import React from 'react'
import logo from '../Resources/camera.png'
export const SignUp = () => {



    return (
        <div className="background-div">
            <div className='popup signup-content'>
                <img src={logo} alt='logo' className='logo'></img>
                <p id="signup-prompt-div">
                    Sign up to see posts and photos from your friends
                </p>

                <form className='sign-up-login-form'>
                    <div className='form-fields'>
                        <input type="email" placeholder="Email" className='form-field'></input>
                        <input type="text" placeholder="Full Name" className='form-field'></input>
                        <input type="text" placeholder="Username" className='form-field'></input>
                        <input type="password" placeholder="Password" className='form-field'></input>
                    </div>
                    <button className='submit-btn'>Sign Up</button>
                </form>
                <div className='offer-login-signup'>
                    <p>Have an account? <a href='#' >Log in</a></p>
                </div>
            </div>
        </div>
    )
}

export default SignUp;