import React from "react";
import styled from "styled-components";
import FormCmp from "../../../component/FormCmp";
import ButtonCmp from "../../../component/ButtonCmp";
import colors from "../../../style/colors";
import useOrderOwner from "../../../service/useOrderOwner";
import useModalWindow from "../../../service/useModalWindow";
import ModalWindowCmp from "../../../component/ModalWindowCmp";
import useAxiosService from "../../../service/useAxiosService";
import {StatementContext} from "../../../App";
import {useNavigate} from "react-router-dom";

const OrderRemoveCmp = ({order}) => {
    const modalWindow = useModalWindow();
    const userIsOwner = useOrderOwner(order);
    const axiosService = useAxiosService();
    const {showInfo} = React.useContext(StatementContext);
    const navigate = useNavigate();
    const orderRemoved = () => {
        showInfo(`Zamówienie ${order.name} zostało usunięte`);
        navigate("/user-orders");
    };
    const removeOrderRequest = () => {
        axiosService.delete(`/api/orders/${order.id}`, orderRemoved);
    };

    return userIsOwner ? <FormCmp>
        <ButtonCmp title="Usuń zamówienie" color={colors.danger} onClick={modalWindow.showModalWindow}/>
        <ModalWindowCmp title="Potwierdzenie usunięcia zamówienia" modalHandler={modalWindow}>
            <Content>
                Czy na pewno chcesz usunąć zamówienie {order.name} ?
            </Content>
            <ButtonCmp title="Usuń" color={colors.success} onClick={removeOrderRequest}/>
        </ModalWindowCmp>
    </FormCmp> : <></>
}

const Content = styled.p`
  font-size: larger;
  font-style: italic;
`;
export default OrderRemoveCmp;
