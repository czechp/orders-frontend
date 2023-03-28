import React from "react";
import styled from "styled-components";
import {BACKEND_URL} from "../../../constant/URL";
import {Table, Tbody, Td, Th, Thead, Tr} from "../../../style/table";
import positionUnitTranslator from "../../../service/translator/positionUnitTranslator";
import LoadingWrapper from "../../../component/LoadingWrapper";
import useAxiosService from "../../../service/useAxiosService";
import InputTextCmp from "../../../component/InputTextCmp";
import FormCmp from "../../../component/FormCmp";

const OrderedPositionsCmp = () => {
    const [positions, setPositions] = React.useState([]);
    const [filterPattern, setFilterPattern] = React.useState("");
    const axiosService = useAxiosService();
    const getPositionsCallback = React.useCallback(() => {
        let requestParams = {};
        if (filterPattern)
            requestParams.pattern = filterPattern;

        axiosService.get(`${BACKEND_URL}/api/orders/positions/ordered`, (response) => {
            setPositions(response.data)
        }, requestParams);

    }, [filterPattern, axiosService]);

    React.useEffect(() => {
        getPositionsCallback();
    }, [getPositionsCallback])

    return <Container>
        <LoadingWrapper loaded={positions}>
            <FormCmp>
                <InputTextCmp title="Filtruj" value={filterPattern}
                              setValue={setFilterPattern}
                              placeholder="Wpisz tekst aby przefiltrować elementy"
                />
            </FormCmp>
            <Table>
                <Thead>
                    <Tr>
                        <Th>Id</Th>
                        <Th>Nazwa</Th>
                        <Th>Nr. seryjny</Th>
                        <Th>Producent</Th>
                        <Th>Ilość</Th>
                        <Th>Jednostka</Th>
                        <Th>Zamówienie</Th>
                        <Th>Właściciel</Th>
                        <Th>Nr.zamówienia</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {positions.map((position) => <OrderedPositionRow key={`${position.id}-${Math.random()}`}
                                                                     position={position}/>)}
                </Tbody>
            </Table>
        </LoadingWrapper>
    </Container>
};

const OrderedPositionRow = ({position}) => {
    return <Tr>
        <Td>{position.id}</Td>
        <Td>{position.name}</Td>
        <Td>{position.serialNumber}</Td>
        <Td>{position.producer}</Td>
        <Td>{position.quantity}</Td>
        <Td>{positionUnitTranslator.fromUnit(position.positionUnit)}</Td>
        <Td>{position.orderName}</Td>
        <Td>{position.orderOwner}</Td>
        <Td>{position.orderInternalId}</Td>
    </Tr>
}

const Container = styled.div`
  width: 100%;
`;

export default OrderedPositionsCmp;