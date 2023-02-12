import styled from "styled-components";
import {Bars} from "react-loader-spinner";
import colors from "../style/colors";

const LoadingSpinner = () => {
    return <Container>
        <Bars
            height="250"
            width="250"
            color={colors.main}
            ariaLabel="bars-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
        />
    </Container>
}

const Container = styled.div`
    margin-top: 3rem;
`;
export default LoadingSpinner;