import React, {useState} from "react";
import {StatementContext} from "../App";
import axios from "axios";
import {BACKEND_URL} from "../constant/URL";
import {getAuthorizationToken} from "./useAuthenticationService";


const httpErrorHandler = (error, showErrorInfo) => {
    console.log(error)
    const message = error.response.data.message || "Nieznany błąd";
    showErrorInfo(message, true);
}

function createBackendInstance() {
    const axiosBackendInstance = axios.create({baseURL: BACKEND_URL});
    axiosBackendInstance.interceptors.request.use((request) => {
       const authorizationToken = getAuthorizationToken();
       if(authorizationToken)
           request.headers["Authorization"]=`Basic ${authorizationToken}`
        return request;
    });
    return axiosBackendInstance;
}

const useAxiosService = () => {
    const {showInfo} = React.useContext(StatementContext);

    function handleError(error) {
        httpErrorHandler(error, showInfo)
    }

    const [axiosBackendHook] = useState({
        post: ((endpoint, body, successHandler, errorHandler = handleError) => {
            createBackendInstance().post(endpoint, body)
                .then(successHandler)
                .catch(errorHandler)
        }),
        get: ((endpoint, successHandler, errorHandler = handleError) => {
            createBackendInstance().get(endpoint)
                .then(successHandler)
                .catch(errorHandler)
        }),
        configureAuthorizationHeader: (authorizationHeader) => {
            createBackendInstance().interceptors.request.use((config) => {
                if (authorizationHeader)
                    config.headers.Authorization = `Basic ${authorizationHeader}`;
                else
                    config.headers.Authorization = "";


                return config;
            })
        }
    });
    return axiosBackendHook;
}

export default useAxiosService;