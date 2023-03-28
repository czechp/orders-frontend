import styled from "styled-components";
import useGetRequest from "../../../service/useGetRequest";
import {BACKEND_URL} from "../../../constant/URL";
import {Table, Tbody, Td, Th, Thead, Tr} from "../../../style/table";
import positionUnitTranslator from "../../../service/translator/positionUnitTranslator";
import LoadingWrapper from "../../../component/LoadingWrapper";

const OrderedPositionsCmp = () => {
    const {result: positions} = useGetRequest(`${BACKEND_URL}/api/orders/positions/ordered`);
    return <Container>
        <LoadingWrapper loaded={positions}>
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
                    {positions.map((position)=><OrderedPositionRow key={`${position.id}-${Math.random()}`} position={position} />)}
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