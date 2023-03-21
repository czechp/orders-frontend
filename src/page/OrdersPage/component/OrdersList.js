import React from "react";
import styled from "styled-components";
import useAxiosService from "../../../service/useAxiosService";
import {Table, Tbody, Td, Th, Thead, Tr} from "../../../style/table";
import dateFormatter from "../../../service/dateFormatter";
import useSortingParams from "../../../service/useSortingParams";
import LoadingWrapper from "../../../component/LoadingWrapper";

const OrdersList = ({
                        state, title, url, rowOnClick = () => {}, reload=()=>{}
                    }) => {
    const [orders, setOrders] = React.useState();
    const [sortParams, setSortParams] = React.useState(null);
    const axiosService = useAxiosService();
    const generateSortingParams = useSortingParams();


    const getOrdersRequest = React.useCallback(() => {
        let params = {};
        if (sortParams)
            params = sortParams;

        axiosService.get(url, (response) => setOrders(response.data), {...params, state});
    }, [setOrders, axiosService, state, sortParams, url]);

    const determineSortingParameters = (field) => {
        setSortParams(generateSortingParams(field));
    };

    React.useEffect(() => {
        getOrdersRequest()
    }, [getOrdersRequest, reload]);

    return <Container>
        <LoadingWrapper loaded={orders}>
            {orders && <>
                <Title>{title}</Title>
                <Table>
                    <Thead>
                        <Tr>
                            <Th onClick={() => {
                                determineSortingParameters("id")
                            }}>Id</Th>
                            <Th onClick={() => {
                                determineSortingParameters("name")
                            }}>Nazwa</Th>
                            <Th onClick={() => {
                                determineSortingParameters("owner")
                            }}>Właściciel</Th>
                            <Th onClick={() => {
                                determineSortingParameters("internalId")
                            }}>Wewnętrzne id</Th>
                            <Th onClick={() => {
                                determineSortingParameters("createdAt")
                            }}>Data utowrzenia</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {orders.map((order) => <OrderRow key={`${order.id}-${Math.random()}`} order={order}
                                                         onClick={rowOnClick}/>)}
                    </Tbody>
                </Table></>}
        </LoadingWrapper>
    </Container>
}

const OrderRow = ({order, onClick}) => {
    return <Tr onClick={() => onClick(order)}>
        <Td>{order.id}</Td>
        <Td>{order.name}</Td>
        <Td>{order.owner}</Td>
        <Td>{order.internalId}</Td>
        <Td>{dateFormatter.toFormattedDate(order.createdAt)}</Td>

    </Tr>
}
const Container = styled.div`
  width: 100%;
  margin-bottom: 5rem;
`;

const Title = styled.h2``;

export default OrdersList;