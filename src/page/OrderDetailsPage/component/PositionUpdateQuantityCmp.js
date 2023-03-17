import React from "react";
import styled from "styled-components";
import InputTextCmp from "../../../component/InputTextCmp";
import ButtonCmp from "../../../component/ButtonCmp";
import colors from "../../../style/colors";
import useAxiosService from "../../../service/useAxiosService";
import {StatementContext} from "../../../App";

const PositionUpdateQuantityCmp = ({position, orderId, reload, closeModal}) => {
    const [quantity, setQuantity] = React.useState(position.quantity);
    const {showInfo} = React.useContext(StatementContext);
    const axiosService = useAxiosService();
    const quantityUpdated = () => {
        showInfo(`Ilość zostałą zmieniona na ${quantity}`);
        closeModal();
        reload();
    }
    const updateQuantityRequest = () => {
        const requestBody = {orderId, positionId: position.id, newQuantity: quantity};
        axiosService.patch("/api/orders/position/quantity", requestBody, quantityUpdated);
    };
    return <Container>
        <InputTextCmp title="Zmień ilość" value={quantity} setValue={setQuantity} type="number"
                      placeholder="Wpisz nową ilość"/>
        <ButtonCmp title="Zmień ilość" color={colors.warning} onClick={updateQuantityRequest}/>
    </Container>
}

const Container = styled.div`
  width: 100%
`;

export default PositionUpdateQuantityCmp;