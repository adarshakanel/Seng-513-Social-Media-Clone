import React from 'react'
import "../css/Forgot.css"
import { Card, Button, InputGroup, FormControl } from "react-bootstrap"
export const ForgotPassword = () => {
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
                        <div className="cardInput  mb-3">
                            <FormControl
                                placeholder="Username..."
                                aria-label="Username"
                                aria-describedby="basic-addon2"
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

                            />
                        </div>
                        <div className="cardButton">
                            <Button variant="primary" >Reset password</Button>
                        </div>
                    </Card.Body>
                </Card>
            </div>
        </>
    )
}
