import React from "react";
import useAxiosService from "./useAxiosService";

const useGetRequest = (endpoint) => {
    const axiosService = useAxiosService();

    const [elements, setElements] = React.useState([]);
    const getProducersRequest = React.useCallback(() => {
        axiosService.get(endpoint, (response) => setElements(response.data));
    }, [axiosService]);

    React.useEffect(() => {
        getProducersRequest()
    }, [getProducersRequest]);
    return elements;
}

export default useGetRequest;