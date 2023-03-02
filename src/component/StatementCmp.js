import React from "react";
import styled from "styled-components";
import {StatementContext} from "../App";
import colors from "../style/colors";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircleCheck, faTriangleExclamation} from "@fortawesome/free-solid-svg-icons";

const StatementCmp = () => {
    const {statement, isError, showInfo} = React.useContext(StatementContext);
    const [visibility, setVisibility] = React.useState(false);


    React.useEffect(() => {
        function hideWindow() {
            setTimeout(() => {
                setVisibility(false);
                showInfo("");
            }, 5000);
        }

        if (statement !== "") {
            setVisibility(true);
            hideWindow();
        }
    }, [statement, showInfo]);
    return <Container error={isError}>
        {visibility && <StatementContainer error={isError}>
            <StatementIcons error={isError}>
                <Content> {statement}</Content>
            </StatementIcons>
        </StatementContainer>}
    </Container>
}

const StatementIcons = ({error, children}) => {
    return <IconContainer>
        {error ? <FontAwesomeIcon icon={faTriangleExclamation} size={"2x"}/> : <FontAwesomeIcon icon={faCircleCheck} size={"2x"}/> }
        {children}
        {error ? <FontAwesomeIcon icon={faTriangleExclamation} size={"2x"}/> : <FontAwesomeIcon icon={faCircleCheck} size={"2x"}/> }
    </IconContainer>
}

const Container = styled.div`
  border-radius: 10px;
  position: fixed;
  bottom: .5rem;
  right: .5rem;
  width: 40vw;
  z-index: 999;
`;
const StatementContainer = styled.div`
  font-size: x-large;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  color: ${props => props.error ? colors.danger : colors.basic};
  border-radius: 10px;
  border: 0.25rem solid;
  padding: 3rem 5rem;
  background-color: ${colors.background};
`;

const Content = styled.span`
  margin: 0 2rem;
`;

const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export default StatementCmp;