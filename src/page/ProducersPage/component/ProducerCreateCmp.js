import React from "react";
import FormCmp from "../../../component/FormCmp";
import ButtonCmp from "../../../component/ButtonCmp";
import useModalWindow from "../../../service/useModalWindow";
import ModalWindowCmp from "../../../component/ModalWindowCmp";
import InputTextCmp from "../../../component/InputTextCmp";
import colors from "../../../style/colors";
import useAxiosService from "../../../service/useAxiosService";
import {StatementContext} from "../../../App";
import {producerNameValidator} from "../../ProducerDetailsPage/validator/producerNameValidator";

const ProducerCreateCmp = ({reload}) => {
    const modalWindowHandler = useModalWindow();
    const {showInfo} = React.useContext(StatementContext);
    const axiosService = useAxiosService();
    const [producerName, setProducerName] = React.useState("");

    const producerCreated = () => {
        showInfo(`Producent - ${producerName} został utworzony`);
        modalWindowHandler.hideModalWindow();
        reload();
    }
    const createProducerRequest = () => {
        const requestBody = {name: producerName};
        axiosService.post("/api/producers", requestBody, producerCreated);
    };

    const buttonCreateOnClick = () => {
        if (producerNameValidator.validate(producerName)) createProducerRequest(); else showInfo("Sprawdź poprawność danych", true);
    };

    return <FormCmp>
        <ButtonCmp title="Stwórz producenta" onClick={modalWindowHandler.showModalWindow}/>
        <ModalWindowCmp modalHandler={modalWindowHandler}>
            <InputTextCmp title="Nazwa producenta"
                          value={producerName}
                          setValue={setProducerName}
                          placeholder="Wpisz nazwę producenta"
                          validation={producerNameValidator}
            />
            <ButtonCmp title="Dodaj" color={colors.success} onClick={buttonCreateOnClick}/>
        </ModalWindowCmp>
    </FormCmp>
}
export default ProducerCreateCmp;