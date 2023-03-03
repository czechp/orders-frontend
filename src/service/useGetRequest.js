import React from "react";
import useAxiosService from "./useAxiosService";

const useGetRequest = (endpoint, singleElement = false) => {
    const axiosService = useAxiosService();

    const [elements, setElements] = React.useState([]);
    const [element, setElement] = React.useState();
    // eslint-disable-next-line no-unused-vars
    const [relaod, setReload] = React.useState(true);

    function toggleReload() {
        setReload((prev) => !prev);
    }

    function persistData(response) {
        if (singleElement) setElement(response.data);
        else setElements(response.data);

    }

    const getProducersRequest = React.useCallback(() => {
        axiosService.get(endpoint, persistData);
    }, [axiosService, endpoint, relaod]);

    React.useEffect(() => {
        getProducersRequest()
    }, [getProducersRequest]);
    return {result: singleElement ? element : elements, reload: toggleReload}
}

export default useGetRequest;