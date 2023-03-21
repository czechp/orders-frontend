import React from "react";
import styled from "styled-components";
import FormCmp from "../../../component/FormCmp";
import ButtonCmp from "../../../component/ButtonCmp";
import useModalWindow from "../../../service/useModalWindow";
import ModalWindowCmp from "../../../component/ModalWindowCmp";
import useAxiosService from "../../../service/useAxiosService";
import {StatementContext} from "../../../App";
import {useNavigate} from "react-router-dom";

const OrderReleaseToExecutionCmp = ({orderId}) => {
    const modalWindowHandler = useModalWindow();
    const axiosService = useAxiosService();
    const {showInfo} = React.useContext(StatementContext);
    const navigate = useNavigate();
    const orderReleased = () => {
        showInfo("Zamówienie zostało przekazane do realizacji");
        modalWindowHandler.hideModalWindow();
        navigate("/user-orders");
    }

    const releaseToExecutionRequest = () => {
        axiosService.patch(`/api/orders/execution-release/${orderId}`, {}, orderReleased);
    };
    return <FormCmp>
        <ButtonCmp title="Przekaż do realizacji" onClick={modalWindowHandler.showModalWindow}/>
        <ModalWindowCmp title="Przekaż do realizacji" modalHandler={modalWindowHandler}>
            <Content>
                Po przekazaniu do realizacji nie będze możliwa dalsz edycja zamówienia
            </Content>
            <ButtonCmp title="Przekaż do realizacji" onClick={releaseToExecutionRequest}/>
        </ModalWindowCmp>
    </FormCmp>
}

const Content = styled.p`
  font-style: italic;
  font-size: larger;
`;
export default OrderReleaseToExecutionCmp;
