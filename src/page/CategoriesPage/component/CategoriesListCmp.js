import React from "react";
import LoadingWrapper from "../../../component/LoadingWrapper";
import useAxiosService from "../../../service/useAxiosService";
import {Table, Tbody, Td, Th, Thead, Tr} from "../../../style/table";
import dateFormatter from "../../../service/dateFormatter";
import {useNavigate} from "react-router-dom";
import useSortingParams from "../../../service/useSortingParams";

const CategoriesListCmp = ({reload}) => {
    const axiosService = useAxiosService();
    const generateSortingParams = useSortingParams();
    const navigate = useNavigate();
    const [categories, setCategories] = React.useState();
    const getProvidersCallback = React.useCallback(() => {
        axiosService.get("/api/categories", (response) => setCategories(response.data));
    }, [axiosService]);

    const navigateToDetails = (provider) => {
        const providerData = {id: provider.id, name: provider.name};
        navigate("/category-details", {state: providerData});
    }

    const sortByField = (fieldName) => {
        const params = generateSortingParams(fieldName);
        axiosService.get("/api/categories", (response) => setCategories(response.data), params);

    }

    React.useEffect(() => {
        getProvidersCallback();
    }, [getProvidersCallback, reload]);
    return <LoadingWrapper loaded={categories}>
        {categories && <Table>
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
                    categories.map((provider, index) => <CategoryRow onClick={() => navigateToDetails(provider)}
                                                                    key={`${provider.id}-${Math.random()}`}
                                                                    provider={provider}/>)
                }
            </Tbody>
        </Table>}
    </LoadingWrapper>
}

const CategoryRow = ({provider, onClick}) => {
    return <Tr onClick={onClick}>
        <Td>{provider.id}</Td>
        <Td>{provider.name}</Td>
        <Td>{dateFormatter.toFormattedDate(provider.createdAt)}</Td>
        <Td>{dateFormatter.toFormattedDate(provider.updatedAt)}</Td>
    </Tr>
}

export default CategoriesListCmp;