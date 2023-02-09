import React from "react";
import styled from "styled-components";
import useAxiosService from "../../../service/useAxiosService";
import LoadingWrapper from "../../../component/LoadingWrapper";

const UsersList = () => {
    const axiosService = useAxiosService();
    const [users, setUsers] = React.useState(null);

    React.useEffect(() => {axiosService.get("/api/users", (response) => setUsers(response.data))}, [])


    return <LoadingWrapper loaded={users}>
        <Container></Container>
    </LoadingWrapper>
}

const Container = styled.div`
  width: 100%;
`;

export default UsersList;