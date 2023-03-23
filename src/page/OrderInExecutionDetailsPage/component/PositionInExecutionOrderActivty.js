import React from "react";
import styled from "styled-components";
import ButtonCmp from "../../../component/ButtonCmp";
import useAxiosService from "../../../service/useAxiosService";
import {StatementContext} from "../../../App";

const PositionInExecutionOrderActivity = ({activityName, endpoint, requestBody, successStatement, reload, closeModal}) => {
    const axiosService = useAxiosService();
    const {showInfo} = React.useContext(StatementContext);
    const activityExecuted = () => {
        showInfo(successStatement);
        reload();
        closeModal();
    }
    const activityRequest = () => {
        axiosService.patch(endpoint, requestBody, activityExecuted);
    }
    return <Container>
        <ButtonCmp title={activityName} onClick={activityRequest}/>
    </Container>
}
const Container = styled.div``;

export default PositionInExecutionOrderActivity;