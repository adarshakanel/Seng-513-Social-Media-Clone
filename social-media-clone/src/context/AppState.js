import AppContext from "./AppContext";
import { useState } from "react";

const AppState = (props) => {
    // const theme = useTheme();
    // const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    const userInformation = {
        fullName: "John Doe",
        userId: '62389d0ee792273ebecf1551',
        pfp: "a picture",
    }
    let url = 'http://localhost:5000/user/'
    let postUrl = 'http://localhost:5000/post/'

    const [loggedIn, isLoggedIn] = useState(false)
    const [userInfo, setUserInfo] = useState(userInformation)
    return (
        <AppContext.Provider
            value={{
                loggedIn, isLoggedIn,
                userInfo, setUserInfo,
                url, postUrl
            }}
        >
            {props.children}
        </AppContext.Provider>
    );
};

export default AppState;
