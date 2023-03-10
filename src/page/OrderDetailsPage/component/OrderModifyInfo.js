import React from "react";
import FormCmp from "../../../component/FormCmp";
import ButtonCmp from "../../../component/ButtonCmp";
import colors from "../../../style/colors";
import useModalWindow from "../../../service/useModalWindow";
import ModalWindowCmp from "../../../component/ModalWindowCmp";
import useCreateOrderData from "../../OrdersPage/component/useCreateOrderData";
import InputTextCmp from "../../../component/InputTextCmp";
import {StatementContext} from "../../../App";
import useAxiosService from "../../../service/useAxiosService";
import useOrderOwner from "../../../service/useOrderOwner";

const OrderModifyInfo = ({order, reload}) => {
    const modalWindowHandler = useModalWindow();
    const orderForm = useCreateOrderData(order.name, order.description);
    const {showInfo} = React.useContext(StatementContext);
    const axiosService = useAxiosService();
    const userIsOwner = useOrderOwner(order);
    const isPreparationState = order?.orderState === "PREPARATION" && userIsOwner;

    const orderUpdated = () => {
        showInfo("Nazwa oraz opis zostały zaktualizowane");
        modalWindowHandler.hideModalWindow();
        reload();
    }
    const updateInfoRequest = () => {
        const requestBody = {
            orderId: order.id,
            name: orderForm.name.value,
            description: orderForm.description.value
        }
        axiosService.patch("/api/orders/info", requestBody, orderUpdated);
    };
    const updateDataBtnOnClick = () => {
        if (orderForm.validateAll())
            updateInfoRequest();
        else
            showInfo("Sprawdź poprawność danych", true);
    };

    return isPreparationState ?
        <FormCmp>
            <ButtonCmp color={colors.warning} title="Zmien nazwę lub opis"
                       onClick={modalWindowHandler.showModalWindow}/>
            <ModalWindowCmp modalHandler={modalWindowHandler} title={`Zmień nazwę lub opis dla - ${order.name}`}>
                <InputTextCmp title="Nazwa" value={orderForm.name.value} setValue={orderForm.name.setName}
                              placeholder="Wpisz nową nazwę dla zamówienia" validation={orderForm.name.validation}/>
                <InputTextCmp title="Opis" value={orderForm.description.value} setValue={orderForm.description.value}
                              placeholder="Wpisz nowy opis"/>
                <ButtonCmp color={colors.success} title="Zapisz" onClick={updateDataBtnOnClick}/>
            </ModalWindowCmp>
        </FormCmp>
        :
        <></>
}

export default OrderModifyInfo;