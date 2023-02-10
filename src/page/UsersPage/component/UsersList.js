import React from "react";
import styled from "styled-components";
import useAxiosService from "../../../service/useAxiosService";
import LoadingWrapper from "../../../component/LoadingWrapper";
import dateFormatter from "../../../service/dateFormatter";
import {Table, Td, Th, Thead, Tr} from "../../../style/table";
import useSortingParams from "../../../service/useSortingParams";

const UsersList = () => {
    const axiosService = useAxiosService();
    const generateSortingParams = useSortingParams();

    const [users, setUsers] = React.useState(null);

    React.useEffect(() => {
        getUsersRequest();
    }, [])

    function getUsersRequest(params = {}){
        axiosService.get("/api/users", (response) => setUsers(response.data), params);
    }
    function sortByField(fieldName){
        const sortingParams = generateSortingParams(fieldName);
        getUsersRequest(sortingParams);
    }

    return <LoadingWrapper loaded={users}>
        <Container>
            {users && <Table>
                <Thead>
                    <Th onClick={()=>sortByField("id")}>Id:</Th>
                    <Th onClick={()=>sortByField("username")}>Login:</Th>
                    <Th onClick={()=>sortByField("email")}>Email:</Th>
                    <Th onClick={()=>sortByField("userRole")}>Rola:</Th>
                    <Th onClick={()=>sortByField("confirmed")}>Potwierdzenie adresu email:</Th>
                    <Th onClick={()=>sortByField("createdAt")}>Data utowrzenia:</Th>
                </Thead>
                <tbody>
                {
                    users.map((user, id) => <UserRow key={`${user.id}-${Math.random()}`} user={user}/>)
                }
                </tbody>
            </Table>}
        </Container>
    </LoadingWrapper>
}

const UserRow = ({user}) => {
    //TODO: add admin activation
    return <Tr>
        <Td>{user.id}</Td>
        <Td>{user.username}</Td>
        <Td>{user.email}</Td>
        <Td>{user.userRole}</Td>
        <Td>{user.confirmed ? "TAK" : "NIE"}</Td>
        <Td>{dateFormatter.toFormattedDate(user.createdAt)}</Td>
    </Tr>
}

const Container = styled.div`
  width: 100%;
`;

export default UsersList;