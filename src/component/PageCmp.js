import styled from "styled-components";

const PageCmp = ({title}) => {
    return <Container>
        <Title>{title}</Title>
        <hr/>
    </Container>
}

const Container = styled.div`
  width: 100%;
  padding: 1rem;
`;

const Title = styled.h1`
    text-align: left;
`;
export default PageCmp;