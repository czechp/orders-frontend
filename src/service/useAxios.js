import React from "react";
import {useState} from "react";
import axiosBackend from "./httpService";
import {StatementContext} from "../App";
import httpErrorHandler from "./httpErrorHandler";

const useAxios = () => {
    const {showInfo} = React.useContext(StatementContext);
    function handleError(error){
        httpErrorHandler(error, showInfo)
    }
    const [axiosBackendHook] = useState({
        post: ((endpoint, body, successHandler, errorHandler = handleError ) => {
            axiosBackend.post(endpoint, body)
                .then(successHandler)
                .catch(errorHandler)
        })
    });
    return axiosBackendHook;
}

export default useAxios;