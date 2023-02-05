import React from "react";

import useAuthenticationService from "../service/useAuthenticationService";
import {Navigate} from "react-router-dom";
import {StatementContext} from "../App";

const LoginGuard = ({children}) => {
    const {isLogged} = useAuthenticationService();
    const {showInfo} = React.useContext(StatementContext);

    if(!isLogged())
        showInfo("Zaloguj się aby mieć dostęp", true);

    return isLogged() ? children : <Navigate to={"/login"}/>
}

export  default LoginGuard;