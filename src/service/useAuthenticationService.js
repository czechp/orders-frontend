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

export default useAuthenticationService;