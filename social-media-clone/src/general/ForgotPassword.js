import React from 'react'
import "../css/Forgot.css"
import { Card, Button, InputGroup, FormControl } from "react-bootstrap"
import { useState, useContext } from 'react'
import AppContext from '../context/AppContext'
export const ForgotPassword = () => {
    const formVal = {
        username: '',
        password: '',
        confirmPassword: ''
    }

    function forgotPassword(e) {
        e.preventDefault()
        // console.log(formValues)
        if (formValues.password == formValues.confirmPassword) {
            fetch(url + 'login',
                {
                    method: 'PUT',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ username: formValues.username, password: formValues.password })
                })
                .then(response => response.ok ? setPasswordChanged(true) && setFormValues(formVal) : null)
        }

    }

    const { url } = useContext(AppContext)
    const [formValues, setFormValues] = useState(formVal)
    const [passwordChanged, setPasswordChanged] = useState(false)
    return (
        <>
            <div className="forgotContainer">
                <Card>
                    {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                    <Card.Body>
                        <Card.Title>Forgot password</Card.Title>
                        <div className="username mb-2">
                            Username
                        </div>
                        <div className="cardInput mb-3">
                            <FormControl
                                placeholder="Username..."
                                aria-label="Username"
                                aria-describedby="basic-addon2"
                                onChange={(e) => setFormValues({ ...formValues, username: e.target.value })}
                            />
                        </div>

                        <div className="username mb-2">
                            Password
                        </div>
                        <div className="cardInput mb-3">
                            <FormControl
                                placeholder="Password..."
                                aria-label="Password"
                                aria-describedby="basic-addon2"
                                type='password'
                                onChange={(e) => setFormValues({ ...formValues, password: e.target.value })}
                            />
                        </div>
                        <div className="username mb-2">
                            Confirm Password
                        </div>
                        <div className="cardInput  mb-3">

                            <FormControl
                                placeholder="Confirm password..."
                                aria-label="Confirm password"
                                aria-describedby="basic-addon2"
                                type='password'
                                onChange={(e) => setFormValues({ ...formValues, confirmPassword: e.target.value })}
                            />
                        </div>
                        {
                            passwordChanged ?
                                <div className="passwordChange mb-2">
                                    Password has been changed
                                </div>
                                :
                                null
                        }

                        <div className="cardButton">
                            <Button variant="primary" onClick={e => forgotPassword(e)} >Reset password</Button>
                        </div>
                    </Card.Body>
                </Card>
            </div>
        </>
    )
}
