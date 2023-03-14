import styled from "styled-components";
import {Table, Tbody, Td, Th, Thead, Tr} from "../../../style/table";
import positionStateTranslator from "../../../service/translator/positionStateTranslator";
import positionUnitTranslator from "../../../service/translator/positionUnitTranslator";
import colors from "../../../style/colors";
import {Link} from "react-router-dom";
import React from "react";

const PositionsListCmp = ({order, rowOnClick=()=>{}}) => {
    return <Container>
        <Table>
            <Thead>
                <Tr>
                    <Th>Id</Th>
                    <Th>Nazwa</Th>
                    <Th>Producent</Th>
                    <Th>Link</Th>
                    <Th>Status</Th>
                    <Th>Ilość</Th>
                    <Th>Jednostka</Th>
                </Tr>
            </Thead>
            <Tbody>
                {order.positions.map((position) => <PositionRow key={`${position.id}-${Math.random()}`}
                                                                position={position} onClick={rowOnClick}/>)}
            </Tbody>
        </Table>
    </Container>
}

const PositionRow = ({position, onClick}) => {
    let stateColor = colors.background;
    switch (position.positionStatus) {
        case "NOT_ORDERED":
            stateColor = colors.danger;
            break;
        case "ORDERED":
            stateColor = colors.warning
            break;
        case "DELIVERED":
            stateColor = colors.success;
            break;
        default:
            stateColor = colors.background;
    }

    const rowStyle={
        borderLeft: `10px solid ${stateColor}`,
        borderRight: `10px solid ${stateColor}`,
        color: stateColor
    };
    return <Tr style={rowStyle} onClick={()=>{onClick(position)}}>
        <Td>{position.id}</Td>
        <Td>{position.name}</Td>
        <Td>{position.producer}</Td>
        <Td onClick={e => e.stopPropagation()}><Link style={{color: colors.primary}} to={{pathname: position.url}}
                                                     target="_blank">Klik</Link></Td>
        <Td>{positionStateTranslator.fromState(position.positionStatus)}</Td>
        <Td>{position.quantity}</Td>
        <Td>{positionUnitTranslator.fromUnit(position.positionUnit)}</Td>
    </Tr>
}
const Container = styled.div`
  width: 100%;
  margin-top: 2rem
`;

export default PositionsListCmp;

