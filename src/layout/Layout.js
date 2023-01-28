import styled from "styled-components";
import colors from "../style/colors";

export const Layout = styled.div`
  background-color: ${colors.background};
  color: ${colors.main};
  max-width:100%;
  position: relative;
`;

export const TopBar = styled.div`
  height: 10vh;
  border-bottom: 2px solid;
  width: 100vw;
  max-width: 100%;
  position: sticky;
  top: 0;
  z-index: 100;
`;

export const ContentWrapper = styled.div`
    display: flex;
`

export const Content = styled.div`
    position: relative;
    width: 80vw;
`

export const Navigation = styled.div`
    width: 20vw;
    border-right: 2px solid;
    min-height: 90vh;
`;
