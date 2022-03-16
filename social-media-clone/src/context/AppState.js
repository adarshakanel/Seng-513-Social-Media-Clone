import AppContext from "./AppContext";
import { useState } from "react";

const AppState = (props) => {
    // const theme = useTheme();
    // const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    const userInformation = {
        fullName: "John Doe",
        userId: "0",
        pfp: "a picture",
    }

    const [loggedIn, isLoggedIn] = useState(false)
    const [userInfo, setUserInfo] = useState(userInformation)
    return (
        <AppContext.Provider
            value={{
                loggedIn, isLoggedIn,
                userInfo, setUserInfo
            }}
        >
            {props.children}
        </AppContext.Provider>
    );
};

export default AppState;
