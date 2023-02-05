import React from "react";
import storageService from "./storageService";

const labels = {
    login: "LOGIN",
    authenticationToken: "AUTHENTICATION_TOKEN",
    email: "EMAIL",
    role: "ROLE"
}

function generateAuthenticationToken(login, password) {
    return window.btoa(`${login}:${password}`);
}

function logged(login, password, email, role){
    storageService.save(labels.login, login);
    storageService.save(labels.authenticationToken, generateAuthenticationToken(login, password));
    storageService.save(labels.email, email);
    storageService.save(labels.role, role);
}

const useAuthenticationService = () => {
    const [authenticationService] = React.useState({
        logged
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