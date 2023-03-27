import React from "react";
import FormCmp from "../../../component/FormCmp";
import ButtonCmp from "../../../component/ButtonCmp";
import colors from "../../../style/colors";
import useModalWindow from "../../../service/useModalWindow";
import ModalWindowCmp from "../../../component/ModalWindowCmp";
import InputTextCmp from "../../../component/InputTextCmp";
import useAxiosService from "../../../service/useAxiosService";
import {StatementContext} from "../../../App";

const OrderInExecutionSetInternalId = ({order, reload}) => {
    const modalWindowHandler = useModalWindow();
    const [internalId, setInternalId] = React.useState(order.internalId);
    const {showInfo} = React.useContext(StatementContext);
    const axiosService = useAxiosService();
    const internalIdSaved = () => {
          showInfo("Nr. zamówienia został zakutalizowany");
          modalWindowHandler.hideModalWindow();
          reload();
    };
    const setInternalIdRequest = () => {
        const requestBody = {orderId: order.id, internalId};
        axiosService.patch("/api/orders/internal-id", requestBody, internalIdSaved);
    };
    return <FormCmp>
        <ButtonCmp title="Zmień nr. zamówienia" color={colors.warning} onClick={modalWindowHandler.showModalWindow}/>
        <ModalWindowCmp modalHandler={modalWindowHandler} title="Zmień wewnętrzne id">
            <InputTextCmp title="Nr. zamówienia" setValue={setInternalId} value={internalId}
                          placeholder="Wpisz numer zamówenia"/>
            <ButtonCmp title="Zapisz" color={colors.success} onClick={setInternalIdRequest}/>
        </ModalWindowCmp>
    </FormCmp>
}

export default OrderInExecutionSetInternalId;