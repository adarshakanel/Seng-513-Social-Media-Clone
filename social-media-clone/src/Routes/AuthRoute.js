// import { Route, Redirect } from 'react-router-dom';
import Home from '../general/Home';
import Login from '../general/Login';
import React, { useContext, useEffect, Suspense } from 'react';
import { Route, Routes, useNavigate, Navigate } from 'react-router-dom';

const AuthRoute = ({ children, loggedIn, ...rest }) => {
    const navigate = useNavigate();
    // console.log("helo")
    return <>
        {
            loggedIn ? children : <Login />
        }
    </>;
};

export default AuthRoute;
