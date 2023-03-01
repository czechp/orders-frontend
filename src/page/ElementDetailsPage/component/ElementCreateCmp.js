import ButtonCmp from "../../../component/ButtonCmp";
import FormCmp from "../../../component/FormCmp";
import useAxiosService from "../../../service/useAxiosService";
import React from "react";

const ElementCreateCmp = () => {
    const axiosService = useAxiosService();
    const [producers, setProducers] = React.useState([]);
    const [categories, setCategories] = React.useState([]);
    const [providers, setProviders] = React.useState([]);

    const getProducersRequest = React.useCallback(() => {
        axiosService.get("/api/producers", (response) => setProducers(response.data));
    }, [axiosService]);


    const getCategoriesRequest = React.useCallback(() => {
        axiosService.get("/api/categories", (response) => setCategories(response.data));
    }, [axiosService]);


    const getProvidersRequest = React.useCallback(() => {
        axiosService.get("/api/providers", (response) => setProviders(response.data));
    }, [axiosService]);


    React.useEffect(() => {
        getProducersRequest();
        getProvidersRequest()
        getCategoriesRequest()
    }, [getProducersRequest, getProvidersRequest, getCategoriesRequest])
    return <FormCmp>
        <ButtonCmp title="Dodaj element"/>
    </FormCmp>
}

export default ElementCreateCmp;