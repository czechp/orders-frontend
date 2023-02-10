import styled from "styled-components";
import colors from "./colors";

export const Table = styled.table`
    width: 100%;
    border-collapse: collapse;
`;

export const Thead = styled.thead`
`;

export const Th = styled.th`
  padding: 1rem 0 1rem 0;
  margin: 0;
  &:hover{
    cursor: pointer;
    background-color: ${colors.main};
    color: ${colors.background};
  }
`;

export const Tr = styled.tr`
    &:hover{
      cursor: pointer;
      background-color: ${colors.main};
      color: ${colors.background};
    }
`;

export const Td = styled.td`
  border-top: .1rem solid;
  padding: .5rem;
`;

