import React from "react";
import FormCmp from "../../../component/FormCmp";
import ButtonCmp from "../../../component/ButtonCmp";
import useModalWindow from "../../../service/useModalWindow";
import ModalWindowCmp from "../../../component/ModalWindowCmp";
import InputTextCmp from "../../../component/InputTextCmp";
import {providerNameValidator} from "../../ProviderDetailsPage/validator/providerValidator";
import colors from "../../../style/colors";
import useAxiosService from "../../../service/useAxiosService";
import {StatementContext} from "../../../App";

const ProviderCreateCmp = ({reload}) => {
    const modalWindowHandler = useModalWindow();
    const {showInfo} = React.useContext(StatementContext);
    const axiosService = useAxiosService();
    const [providerName, setProviderName] = React.useState("");

    const providerCreated = () => {
        showInfo(`Dostawca - ${providerName} został utworzony`);
        modalWindowHandler.hideModalWindow();
        reload();
    }
    const createProviderRequest = () => {
        const requestBody = {name: providerName};
        axiosService.post("/api/providers", requestBody, providerCreated);
    };

    const buttonCreateOnClick = () => {
        if (providerNameValidator.validate(providerName))
            createProviderRequest();
        else
            showInfo("Sprawdź poprawność danych", true);
    };

    return <FormCmp>
        <ButtonCmp title="Stwórz dostawce" onClick={modalWindowHandler.showModalWindow}/>
        <ModalWindowCmp modalHandler={modalWindowHandler}>
            <InputTextCmp title="Nazwa dostawcy"
                          value={providerName}
                          setValue={setProviderName}
                          placeholder="Wpisz nazwę dostawcy"
                          validation={providerNameValidator}
            />
            <ButtonCmp title="Dodaj" color={colors.success} onClick={buttonCreateOnClick}/>
        </ModalWindowCmp>
    </FormCmp>
}
export default ProviderCreateCmp;