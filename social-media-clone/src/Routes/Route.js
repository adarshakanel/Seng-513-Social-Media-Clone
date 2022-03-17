import Login from "../general/Login";
import { Route, Routes, useNavigate, Navigate } from 'react-router-dom';
import SignUp from "../general/SignUp";
import React, { useContext, Suspense } from 'react';
import AppContext from '../context/AppContext';
import Home from "../general/Home";

function AllRoutes() {
    const { loggedIn } = useContext(AppContext)
    console.log(loggedIn)
    const navigate = useNavigate();

    return (
        <>
            <Routes>
                {/* <Route path={"/"} exact element={<Home />} /> */}
                <Route path={"/login"} exact element={<Login />} />
                <Route path={"/signup"} exact element={<SignUp />} />
                {
                    loggedIn ?
                        <Route path={"/"} exact element={<Home />}></Route>
                        :
                        <Route path={"/"} exact element={<Login />} />

                }
            </Routes>
        </>
    )
}

export default AllRoutes;
