import React from "react";
import {Table, Tbody, Td, Th, Thead, Tr} from "../../../style/table";
import LoadingWrapper from "../../../component/LoadingWrapper";
import useAxiosService from "../../../service/useAxiosService";
import useSortingParams from "../../../service/useSortingParams";
import {Link, useNavigate} from "react-router-dom";
import colors from "../../../style/colors";
import ElementListFilterCmp from "./ElementListFilterCmp";

const ElementListCmp = ({reload}) => {
    const [elements, setElements] = React.useState();
    const [filterPattern, setFilterPattern] = React.useState("");
    const [sortParams, setSortParams] = React.useState();
    const axiosService = useAxiosService();
    const sortingParams = useSortingParams();
    const navigate = useNavigate();

    const getElementsRequest = React.useCallback(() => {
        let params = {};

        if (filterPattern)
            params = {...params, pattern: filterPattern};

        if (sortParams)
            params = {...params, ...sortParams};

        axiosService.get("/api/elements", (response) => setElements(response.data), params);
    }, [axiosService, filterPattern, sortParams]);

    const sortByField = (fieldName) => {
        setSortParams(sortingParams(fieldName));
    };

    const navigateToDetails = (element) => {
        const elementData = {id: element.id};
        navigate("/element-details", {state: elementData})
    }

    React.useEffect(() => {
        getElementsRequest()
    }, [getElementsRequest, reload]);

    return <LoadingWrapper loaded={elements}>
        {elements && <>
            <ElementListFilterCmp filterPattern={filterPattern} setFilterPattern={setFilterPattern}/>
            <Table>
                <Thead>
                    <Tr>
                        <Th onClick={() => sortByField("id")}>Id</Th>
                        <Th onClick={() => sortByField("name")}>Nazwa</Th>
                        <Th onClick={() => sortByField("description")}>Opis</Th>
                        <Th onClick={() => sortByField("serialNumber")}>Nr. seryjny</Th>
                        <Th onClick={() => sortByField("producer")}>Producent</Th>
                        <Th onClick={() => sortByField("category")}>Kategoria</Th>
                        <Th onClick={() => sortByField("provider")}>Dostawca</Th>
                        <Th>Link</Th>

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
        <Td>{element.name}</Td>
        <Td>{element.description}</Td>
        <Td>{element.serialNumber}</Td>
        <Td>{element.producer}</Td>
        <Td>{element.category}</Td>
        <Td>{element.provider}</Td>
        <Td onClick={e => e.stopPropagation()}><Link style={{color: colors.primary}} to={{pathname: element.url}}
                                                     target="_blank">Klik</Link></Td>
    </Tr>
}

export default ElementListCmp;