import styled from "styled-components";
import {Table, Tbody, Td, Th, Thead, Tr} from "../style/table";
import React from "react";

const InfoCmp = ({title, data})=>{
    return <Container>
        <Table>
            <Thead>
                <Tr>
                    <Th colSpan={2}><Title>{title}</Title></Th>
                </Tr>
            </Thead>
            <Tbody>
                {data.map((row, id) => <Tr key={`${row.value}-${Math.random()}`}>
                    <Td>{row.label}</Td>
                    <Td>{row.value}</Td>
                </Tr>)}
            </Tbody>
        </Table>
    </Container>
}

export default InfoCmp;

const Container = styled.div`
    min-width: 40%;
    margin-bottom: 3rem;
`;

const Title = styled.h3`
    width: 100%;
`;