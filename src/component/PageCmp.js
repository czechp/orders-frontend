import styled from "styled-components";
import React from "react";
import LoadingSpinner from "./LoadingSpinner";

const PageCmp = ({title, loaded = true}) => {

    return <Container>
        <Title>{title}</Title>
        <hr/>
        {!loaded && <LoadingSpinnerWrapper><LoadingSpinner/></LoadingSpinnerWrapper>}
    </Container>
}

const Container = styled.div`
  width: 100%;
  padding: 1rem;
`;

const Title = styled.h1`
  text-align: left;
`;

const LoadingSpinnerWrapper = styled.div`
  width: 100%;
  margin-top: 15rem;
  display: flex;
  justify-content: center;
`;
export default PageCmp;