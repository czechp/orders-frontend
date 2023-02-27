import React from "react";
import {Table, Tbody, Td, Th, Thead, Tr} from "../../../style/table";
import LoadingWrapper from "../../../component/LoadingWrapper";
import useAxiosService from "../../../service/useAxiosService";
import dateFormatter from "../../../service/dateFormatter";
import useSortingParams from "../../../service/useSortingParams";
import {useNavigate} from "react-router-dom";

const ElementListCmp = () => {
    const [elements, setElements] = React.useState();
    const axiosService = useAxiosService();
    const sortingParams = useSortingParams();
    const navigate = useNavigate();

    const getElementsRequest = React.useCallback(() => {
        axiosService.get("/api/elements", (response) => setElements(response.data));
    }, [axiosService]);

    const sortByField = (fieldName) => {
        axiosService.get("/api/elements", (response) => setElements(response.data), sortingParams(fieldName));

    };

    const navigateToDetails = (element) => {
        const elementData = {id: element.id};
        navigate("/element-details", {state: elementData})
    }

    React.useEffect(() => {
        getElementsRequest()
    }, [getElementsRequest]);
    return <LoadingWrapper loaded={elements}>
        {elements && <>
            <Table>
                <Thead>
                    <Tr>
                        <Th onClick={() => sortByField("id")}>Id</Th>
                        <Th onClick={() => sortByField("createdAt")}>Data utworzenia</Th>
                        <Th onClick={() => sortByField("updatedAt")}>Data modyfikacji</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {elements.map((element, index) => <ElementRow key={`${index}-${Math.random()}`}
                                                                  onClick={() => navigateToDetails(element)}
                                                                  element={element}/>)}
                </Tbody>
            </Table>
        </>}
    </LoadingWrapper>
}

const ElementRow = ({element, onClick}) => {
    return <Tr onClick={onClick}>
        <Td>{element.id}</Td>
        <Td>{dateFormatter.toFormattedDate(element.createdAt)}</Td>
        <Td>{dateFormatter.toFormattedDate(element.updatedAt)}</Td>
    </Tr>
}
export default ElementListCmp;