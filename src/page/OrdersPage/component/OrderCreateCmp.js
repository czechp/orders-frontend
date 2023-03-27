import React from "react";
import FormCmp from "../../../component/FormCmp";
import ButtonCmp from "../../../component/ButtonCmp";
import useModalWindow from "../../../service/useModalWindow";
import ModalWindowCmp from "../../../component/ModalWindowCmp";
import useCreateOrderData from "./useCreateOrderData";
import InputTextCmp from "../../../component/InputTextCmp";
import colors from "../../../style/colors";
import {StatementContext} from "../../../App";
import useAxiosService from "../../../service/useAxiosService";

const OrderCreateCmp = ({reload}) => {
    const modalWindowHandler = useModalWindow();
    const newOrderData = useCreateOrderData();
    const {showInfo} = React.useContext(StatementContext);
    const axiosService = useAxiosService();

    function orderCreated() {
        showInfo(`Zamowienie  - ${newOrderData.name.value} zostało utworzone`);
        modalWindowHandler.hideModalWindow();
        reload();
    }

    const createOrderRequest = () => {
        const requestBody = {
            name: newOrderData.name.value,
            description: newOrderData.description.value
        };
        axiosService.post("/api/orders", requestBody, orderCreated)

    }
    const createOrderBtnOnClick = () => {
        const formValidated = newOrderData.validateAll();
        if (formValidated) {
            createOrderRequest();
        } else
            showInfo("Sprwadź porapwność danych", true);
    }
    return <FormCmp>
        <ButtonCmp title="Stwórz zamówienie" onClick={modalWindowHandler.showModalWindow}/>
        <ModalWindowCmp modalHandler={modalWindowHandler} title="Stwórz nowe zamówienie">
            <InputTextCmp title="Nazwa" value={newOrderData.name.value} setValue={newOrderData.name.setName}
                          validation={newOrderData.name.validation} placeholder="Wpisz nazwę zmówienia"/>
            <InputTextCmp title="Opis" value={newOrderData.description.value}
                          setValue={newOrderData.description.setDescription}
                          placeholder="Wpisz opis do zamówienia (opcjonalnie)"/>
            <ButtonCmp title="Stwórz zamówienie" onClick={createOrderBtnOnClick} color={colors.success}/>
        </ModalWindowCmp>
    </FormCmp>
}

export default OrderCreateCmp;