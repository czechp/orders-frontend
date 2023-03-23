import React from "react";
import LoadingWrapper from "../../../component/LoadingWrapper";
import useAxiosService from "../../../service/useAxiosService";
import {Table, Tbody, Td, Th, Thead, Tr} from "../../../style/table";
import dateFormatter from "../../../service/dateFormatter";
import {useNavigate} from "react-router-dom";
import useSortingParams from "../../../service/useSortingParams";

const ProducersListCmp = ({reload}) => {
    const axiosService = useAxiosService();
    const generateSortingParams = useSortingParams();
    const navigate = useNavigate();
    const [producers, setProducers] = React.useState();
    const getProducersCallback = React.useCallback(() => {
        axiosService.get("/api/producers", (response) => setProducers(response.data));
    }, [axiosService]);

    const navigateToDetails = (category) => {
        const categoryData = {id: category.id, name: category.name};
        navigate("/producer-details", {state: categoryData});
    }

    const sortByField = (fieldName) => {
        const params = generateSortingParams(fieldName);
        axiosService.get("/api/producers", (response) => setProducers(response.data), params);

    }

    React.useEffect(() => {
        getProducersCallback();
    }, [getProducersCallback, reload]);
    return <LoadingWrapper loaded={producers}>
        {producers && <Table>
            <Thead>
                <Tr>
                    <Th onClick={() => sortByField("id")}>Id</Th>
                    <Th onClick={() => sortByField("name")}>Nazwa</Th>
                    <Th onClick={() => sortByField("createdAt")}>Data utworzenia</Th>
                    <Th onClick={() => sortByField("updatedAt")}>Data modyfikacji</Th>
                </Tr>
            </Thead>
            <Tbody>
                {
                    producers.map((producer, index) => <ProducerRow onClick={() => navigateToDetails(producer)}
                                                                    key={`${producer.id}-${Math.random()}`}
                                                                    producer={producer}/>)
                }
            </Tbody>
        </Table>}
    </LoadingWrapper>
}

const ProducerRow = ({producer, onClick}) => {
    return <Tr onClick={onClick}>
        <Td>{producer.id}</Td>
        <Td>{producer.name}</Td>
        <Td>{dateFormatter.toFormattedDate(producer.createdAt)}</Td>
        <Td>{dateFormatter.toFormattedDate(producer.updatedAt)}</Td>
    </Tr>
}

export default ProducersListCmp;