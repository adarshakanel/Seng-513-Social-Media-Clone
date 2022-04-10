import Login from "../general/Login";
import { Route, Routes } from 'react-router-dom';
import SignUp from "../general/SignUp";
import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import AuthRoute from "./AuthRoute";
import Home from "../general/Home";
import { Profile } from "../general/Profile";
import { ForgotPassword } from "../general/ForgotPassword";
import Register from "../pages/Register"
import LoginTwo from "../pages/login"
import Chat from "../pages/chat"
function AllRoutes() {
    const { loggedIn } = useContext(AppContext)
    // console.log(loggedIn)

    return (
        <>
            <Routes>
                <Route path={"/"} exact element={<Login />} />
                <Route path={"/signup"} exact element={<SignUp />} />
                <Route path={"/forgot"} exact element={<ForgotPassword />} />
                <Route path="/registerTwo" element={<Register/>}></Route>
                <Route path="/loginTwo" element={<LoginTwo/>}></Route>
                <Route path="/chat" element={<Chat/>}></Route>

                <Route path={"/user/*"} exact
                    element={<AuthRoute loggedIn={loggedIn}>
                        <Routes>
                            <Route path={`/`} exact element={<Home />} />
                            <Route path={`/:name`} exact element={<Profile />} />
                            <Route path={`/chat/*`} exact element={<Chat />} />
                        </Routes>
                    </AuthRoute>}>
                </Route>
                <Route path={"/*"} exact element={<Login />} />
            </Routes>
        </>
    )
}

export default AllRoutes;
