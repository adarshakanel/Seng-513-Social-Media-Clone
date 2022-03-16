import Login from "../general/Login";
import { Route, Routes } from 'react-router-dom';
import SignUp from "../general/SignUp";
import Home from "../general/Home";

function AllRoutes() {
    return (
        <>
            <Routes>
                <Route path={"/"} exact element={<Home />} />
                <Route path={"/login"} exact element={<Login />} />
                <Route path={"/signup"} exact element={<SignUp />} />
            </Routes>
        </>
    )
}

export default AllRoutes;
