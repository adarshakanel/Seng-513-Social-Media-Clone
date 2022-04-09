import AppContext from "./AppContext";
import { useState } from "react";

const AppState = (props) => {
    // const theme = useTheme();
    // const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    const userInformation = {
        fullName: "",
        userId: '',
        pfp: "",
    }

    let url = 'http://localhost:5000/user/'
    let postUrl = 'http://localhost:5000/post/'
    const [show, setShow] = useState(false);
    const [loggedIn, isLoggedIn] = useState(false)
    const [userInfo, setUserInfo] = useState(userInformation)
    return (
        <AppContext.Provider
            value={{
                loggedIn, isLoggedIn,
                userInfo, setUserInfo,
                show, setShow,
                url, postUrl
            }}
        >
            {props.children}
        </AppContext.Provider>
    );
};

export default AppState;
