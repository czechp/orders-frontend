import styled from "styled-components";
import LoadingSpinner from "./LoadingSpinner";
const LoadingWrapper = ({loaded=false, children})=>{
    return <Container>
        {
            loaded ? children : <LoadingSpinner/>
        }
    </Container>
}

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default LoadingWrapper;