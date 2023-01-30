import React from "react";
import styled from "styled-components";
import {StatementContext} from "../App";
import colors from "../style/colors";

const StatementCmp = () => {
    const {statement, isError, showInfo} = React.useContext(StatementContext);
    const [visibility, setVisibility] = React.useState(false);


    React.useEffect(() => {
        function hideWindow() {
            setTimeout(() => {
                setVisibility(false);
                showInfo("");
            }, 3000);
        }

        if (statement !== "") {
            console.log("Something change")
            setVisibility(true);
            hideWindow();
        }
    }, [statement]);
    return <Container error={isError}>
        {visibility && <StatementContainer error={isError}>
            {statement}
        </StatementContainer>}
    </Container>
}

const Container = styled.div`
  border-radius: 10px;
  position: absolute;
  top: 0;
  right: calc(100vw / 2 - 100vw * 0.25);
  width: 40vw;
  height: 100%;

`;
const StatementContainer = styled.div`
  font-size: x-large;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  color: ${props => props.error ? colors.danger : colors.basic };
  //border: 5px solid;
  border-radius: 10px;
  
`;
export default StatementCmp;