import React from "react";
import storageService from "./storageService";
import {AuthenticationContext} from "../App";

const labels = {
    login: "LOGIN",
    authenticationToken: "AUTHENTICATION_TOKEN",
    email: "EMAIL",
    role: "ROLE"
}

function generateAuthenticationToken(login, password) {
    return window.btoa(`${login}:${password}`);
}

const useAuthenticationService = () => {
    const authContext = React.useContext(AuthenticationContext);

    function logged(login, password, email, role){
        storageService.save(labels.login, login);
        storageService.save(labels.authenticationToken, generateAuthenticationToken(login, password));
        storageService.save(labels.email, email);
        storageService.save(labels.role, role);
        authContext.logIn();
    }

    function getUserInfo(){
        return {
            login: storageService.read(labels.login),
            role: storageService.read(labels.role),
            email: storageService.read(labels.email),
            authenticationToken: storageService.read(labels.authenticationToken)
        }
    }

    const [authenticationService] = React.useState({
        logged,
        getUserInfo
    });

    return authenticationService;
}

function isLogged() {
    return storageService.read(labels.authenticationToken) !== null;
}

export const useAuthenticationContext = () => {
    const [logged, setLogged] = React.useState(isLogged());
    const logIn = () => {
        setLogged(true)
    };
    const logOut = () => {
        setLogged(false)
    }

    return {logged, logIn, logOut};
}

export default useAuthenticationService;