import styled from "styled-components";
import React from "react";

const PageCmp = ({title, children}) => {

    return <Container>
        <Title>{title}</Title>
        <hr/>
        <ContentContainer>{children}</ContentContainer>
    </Container>
}

const Container = styled.div`
  width: 100%;
  padding: 1rem;
`;

const Title = styled.h1`
  text-align: left;
`;



const ContentContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;
export default PageCmp;