import styled from "styled-components";
import colors from "../style/colors";

export const Layout = styled.div`
  background-color: ${colors.background};
  color: ${colors.main};
  width: 100vw;
`;

export const TopBar = styled.div`
  width: 100vw;
  height: 10vh;
  border-bottom: 2px solid;
`;

export const ContentWrapper = styled.div`
    display: flex;
`

export const Content = styled.div`
  min-height: calc(100vh - 10vh);

`
export const Navigation = styled.div`
    width: 20vw;
    border-right: 2px solid;
`;
