import React from "react";
import styled from "styled-components";
import useAxiosService from "../../../service/useAxiosService";
import {Table, Tbody, Td, Th, Thead, Tr} from "../../../style/table";
import dateFormatter from "../../../service/dateFormatter";
import useSortingParams from "../../../service/useSortingParams";

const OrdersList = ({state, title}) => {
    const [orders, setOrders] = React.useState([]);
    const [sortField, setSortField]=React.useState();
    const axiosService = useAxiosService();
    const generateSortingParams = useSortingParams();

    const getOrdersRequest = React.useCallback(() => {
        let params = {};
        if(sortField)
            params = generateSortingParams(sortField);

        axiosService.get("/api/orders", (response) => setOrders(response.data), { ...params,state});
    }, [setOrders, axiosService, state, sortField]);


    React.useEffect(() => {
        getOrdersRequest()
    }, [getOrdersRequest]);

    return <Container>
        <Title>{title}</Title>
        <Table>
            <Thead>
                <Tr>
                    <Th onClick={()=>{setSortField("id")}}>Id</Th>
                    <Th onClick={()=>{setSortField("orderInfoName")}}>Nazwa</Th>
                    <Th onClick={()=>{setSortField("createdBy")}}>Właściciel</Th>
                    <Th onClick={()=>{setSortField("createdAt")}}>Data utowrzenia</Th>
                </Tr>
            </Thead>
            <Tbody>
                {orders.map((order) => <OrderRow key={`${order.id}-${Math.random()}`} order={order}/>)}
            </Tbody>
        </Table>
    </Container>
}

const OrderRow = ({order}) => {
    return <Tr>
        <Td>{order.id}</Td>
        <Td>{order.name}</Td>
        <Td>{order.owner}</Td>
        <Td>{dateFormatter.toFormattedDate(order.createdAt)}</Td>

    </Tr>
}
const Container = styled.div`
  width: 100%;
  margin-bottom: 5rem;
`;

const Title = styled.h2``;

export default OrdersList;