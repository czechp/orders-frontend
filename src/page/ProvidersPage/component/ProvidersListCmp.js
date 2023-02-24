import React from "react";
import LoadingWrapper from "../../../component/LoadingWrapper";
import useAxiosService from "../../../service/useAxiosService";
import {Table, Tbody, Td, Th, Thead, Tr} from "../../../style/table";
import dateFormatter from "../../../service/dateFormatter";
import {useNavigate} from "react-router-dom";
import useSortingParams from "../../../service/useSortingParams";

const ProvidersListCmp = ({reload}) => {
    const axiosService = useAxiosService();
    const generateSortingParams = useSortingParams();
    const navigate = useNavigate();
    const [providers, setProviders] = React.useState();
    const getProvidersCallback = React.useCallback(() => {
        axiosService.get("/api/providers", (response) => setProviders(response.data));
    }, [axiosService]);

    const navigateToDetails = (provider) => {
        const providerData = {id: provider.id, name: provider.name};
        navigate("/provider-details", {state: providerData});
    }

    const sortByField = (fieldName) => {
        const params = generateSortingParams(fieldName);
        axiosService.get("/api/providers", (response) => setProviders(response.data), params);

    }

    React.useEffect(() => {
        getProvidersCallback();
    }, [getProvidersCallback, reload]);
    return <LoadingWrapper loaded={providers}>
        {providers && <Table>
            <Thead>
                <Tr>
                    <Th onClick={()=>sortByField("id")}>Id</Th>
                    <Th onClick={()=>sortByField("name")}>Nazwa</Th>
                    <Th onClick={()=>sortByField("createdAt")}>Data utworzenia</Th>
                    <Th onClick={()=>sortByField("updatedAt")}>Data modyfikacji</Th>
                </Tr>
            </Thead>
            <Tbody>
                {
                    providers.map((provider, index) => <ProviderRow onClick={() => navigateToDetails(provider)}
                                                                    key={`${provider.id}-${Math.random()}`}
                                                                    provider={provider}/>)
                }
            </Tbody>
        </Table>}
    </LoadingWrapper>
}

const ProviderRow = ({provider, onClick}) => {
    return <Tr onClick={onClick}>
        <Td>{provider.id}</Td>
        <Td>{provider.name}</Td>
        <Td>{dateFormatter.toFormattedDate(provider.createdAt)}</Td>
        <Td>{dateFormatter.toFormattedDate(provider.updatedAt)}</Td>
    </Tr>
}

export default ProvidersListCmp;