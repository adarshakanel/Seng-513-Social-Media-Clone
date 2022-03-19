import Login from "../general/Login";
import { Route, Routes } from 'react-router-dom';
import SignUp from "../general/SignUp";
import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import AuthRoute from "./AuthRoute";
import Home from "../general/Home";
import Chat from "../general/Chat";
import { Profile } from "../general/Profile";
function AllRoutes() {
    const { loggedIn } = useContext(AppContext)
    console.log(loggedIn)

    return (
        <>
            <Routes>
                <Route path={"/"} exact element={<Login />} />
                <Route path={"/signup"} exact element={<SignUp />} />
                <Route path={"/user/*"} exact
                    element={<AuthRoute loggedIn={loggedIn}>
                        <Routes>
                            <Route path={`/`} exact element={<Home />} />
                            <Route path={`/:name`} exact element={<Profile />} />
                            <Route path={`/chat`} exact element={<Chat />} />
                        </Routes>
                    </AuthRoute>}>
                </Route>
                <Route path={"/*"} exact element={<Login />} />
            </Routes>
        </>
    )
}

export default AllRoutes;
