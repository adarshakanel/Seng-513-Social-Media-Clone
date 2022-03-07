import Login from "../general/Login";
import { Route, Routes } from 'react-router-dom';
import Home from "../general/Home";

function AllRoutes() {
    return (
        <>
            <Routes>
                <Route path={"/"} exact element={<Home />} />
                <Route path={"/login"} exact element={<Login />} />
            </Routes>
        </>
    )
}

export default AllRoutes;
