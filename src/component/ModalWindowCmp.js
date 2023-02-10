import React from "react";
import styled from "styled-components";
import colors from "../style/colors";
import ButtonCmp from "./ButtonCmp";

const ModalWindowCmp = ({title, modalHandler, children}) => {
    const [visibility, setVisibility] = React.useState(true);
    return modalHandler.visibility ? <Container>
        <ContentContainer>
            <ModalTitle>{title}</ModalTitle>
            <hr/>
            {children}
            <ButtonCmp title="Anuluj" color={colors.danger} onClick={modalHandler.hideModalWindow} />
        </ContentContainer>
    </Container> : <></>
}

const Container = styled.div`
  backdrop-filter: blur(10px);
  position: fixed;
  top: 10%;
  width: 100vw;
  left: 0;
  height: 100%;
  z-index: 999;
  display: flex;
  justify-content: center;
`;

const ContentContainer = styled.div`
  margin-top: 10vh;
  padding: 1rem 3rem 3rem 3rem;
  width: 50%;
  height: fit-content;
  border: .3rem solid;
  border-radius: 2rem;
  background-color: ${colors.background};
`;

const ModalTitle = styled.h2`
    text-align: left;
`;
export default ModalWindowCmp;