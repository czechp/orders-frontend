import styled from "styled-components";
import colors from "../style/colors";

export const Layout = styled.div`
  background-color: ${colors.background};
  color: ${colors.main};
  width: 100vw;
`;

export const Topbar = styled.div`
  width: 100vw;
  height: 10vh;
  padding: 1rem 0;
  border-bottom: 2px solid;
`;

export const ContentWrapper = styled.div`
    display: flex;
`

export const Content = styled.div`
  width: 100vw;
  min-height: calc(100vh - 10vh - 2rem - 2px);

`
export const Navigation = styled.div`
    width: calc(20vw - 2rem);
    border-right: 2px solid;
`;
