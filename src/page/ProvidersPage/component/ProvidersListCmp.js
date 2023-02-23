import React from "react";
import LoadingWrapper from "../../../component/LoadingWrapper";
import useAxiosService from "../../../service/useAxiosService";
import {Table, Tbody, Td, Th, Thead, Tr} from "../../../style/table";
import dateFormatter from "../../../service/dateFormatter";

const ProvidersListCmp = () => {
    const axiosService = useAxiosService();
    const [providers, setProviders] = React.useState();
    const getProvidersCallback = React.useCallback(() => {
        axiosService.get("/api/providers", (response) => setProviders(response.data));
    }, [axiosService]);


    React.useEffect(() => {
        getProvidersCallback();
    }, [getProvidersCallback]);
    return <LoadingWrapper loaded={providers}>
        {providers && <Table>
            <Thead>
                <Tr>
                    <Th>Id</Th>
                    <Th>Nazwa</Th>
                    <Th>Data utworzenia</Th>
                    <Th>Data modyfikacji</Th>
                </Tr>
            </Thead>
            <Tbody>
                {
                    providers.map((provider, index) => <ProviderRow key={`${provider.id}-${Math.random()}`}
                                                                    provider={provider}/>)
                }
            </Tbody>
        </Table>}
    </LoadingWrapper>
}

const ProviderRow = ({provider}) => {
    return <Tr>
        <Td>{provider.id}</Td>
        <Td>{provider.name}</Td>
        <Td>{dateFormatter.toFormattedDate(provider.createdAt)}</Td>
        <Td>{dateFormatter.toFormattedDate(provider.updatedAt)}</Td>
    </Tr>
}

export default ProvidersListCmp;