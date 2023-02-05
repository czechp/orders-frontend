import React, {useState} from "react";
import {StatementContext} from "../App";
import axios from "axios";
import {BACKEND_URL} from "../constant/URL";

const axiosBackend = axios.create({baseURL: BACKEND_URL});

const httpErrorHandler = (error, showErrorInfo) => {
    console.log(error)
    const message = error.response.data.message || "Nieznany błąd";
    showErrorInfo(message, true);
}

const useAxiosService = () => {
    const {showInfo} = React.useContext(StatementContext);

    function handleError(error) {
        httpErrorHandler(error, showInfo)
    }

    const [axiosBackendHook] = useState({
        post: ((endpoint, body, successHandler, errorHandler = handleError) => {
            axiosBackend.post(endpoint, body)
                .then(successHandler)
                .catch(errorHandler)
        }),
        configureAuthorizationHeader: (authorizationHeader) => {
            axiosBackend.interceptors.request.use((config) => {
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