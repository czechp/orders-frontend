import React from "react";
import styled from "styled-components";
import FormCmp from "../../../component/FormCmp";
import ButtonCmp from "../../../component/ButtonCmp";
import colors from "../../../style/colors";
import useModalWindow from "../../../service/useModalWindow";
import ModalWindowCmp from "../../../component/ModalWindowCmp";
import useAxiosService from "../../../service/useAxiosService";
import {StatementContext} from "../../../App";
import {useNavigate} from "react-router-dom";

const OrderCloseOrderCmp = ({order}) => {
    const modalWindow = useModalWindow();
    const axiosService = useAxiosService();
    const {showInfo} = React.useContext(StatementContext);
    const navigate = useNavigate();
    const orderClosed = () => {
        showInfo(`Zamówienie ${order.name} zostało zamknięte`);
        navigate("/orders-in-execution");
    };
    const closeOrderRequest = () => {
        const requestBody = {orderId: order.id};
        axiosService.patch("/api/orders/close", requestBody, orderClosed);
    };

    return <FormCmp>
        <ButtonCmp color={colors.danger} title="Zamknij zamówienie" onClick={modalWindow.showModalWindow}/>
        <ModalWindowCmp modalHandler={modalWindow} title={"Zamknij zamówienie"}>
            <Statement>Czy na pewno chcesz zamknąć zamówienie? Dalsze modyfikacje nie będą możliwe.</Statement>
            <ButtonCmp color={colors.success} title="Zamknij zamówienie" onClick={closeOrderRequest}/>
        </ModalWindowCmp>
    </FormCmp>
}

const Statement = styled.p`
  font-size: larger;
  font-style: italic;
`;
export default OrderCloseOrderCmp;
