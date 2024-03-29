import styled from "styled-components";
import colors from "./colors";

export const Table = styled.table`
    width: 100%;
    border-collapse: collapse;
    border-bottom: .1rem solid;
    font-size: smaller;
`;

export const Thead = styled.thead`
`;

export const Th = styled.th`
  padding: 1rem .5rem 1rem .5rem;
  margin: 0;
  font-style: italic;
  &:hover {
    cursor: pointer;
    background-color: ${colors.background};
    color: ${colors.main};
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

export const Tbody = styled.tbody``;

