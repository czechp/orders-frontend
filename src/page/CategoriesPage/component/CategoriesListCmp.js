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
    const getCategoriesCallback = React.useCallback(() => {
        axiosService.get("/api/categories", (response) => setCategories(response.data));
    }, [axiosService]);

    const navigateToDetails = (category) => {
        const categoryData = {id: category.id, name: category.name};
        navigate("/category-details", {state: categoryData});
    }

    const sortByField = (fieldName) => {
        const params = generateSortingParams(fieldName);
        axiosService.get("/api/categories", (response) => setCategories(response.data), params);

    }

    React.useEffect(() => {
        getCategoriesCallback();
    }, [getCategoriesCallback, reload]);
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
                    categories.map((category, index) => <CategoryRow onClick={() => navigateToDetails(category)}
                                                                    key={`${category.id}-${Math.random()}`}
                                                                    provider={category}/>)
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