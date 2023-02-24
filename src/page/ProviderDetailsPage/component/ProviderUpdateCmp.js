import React from "react";
import FormCmp from "../../../component/FormCmp";
import useModalWindow from "../../../service/useModalWindow";
import ButtonCmp from "../../../component/ButtonCmp";
import ModalWindowCmp from "../../../component/ModalWindowCmp";
import InputTextCmp from "../../../component/InputTextCmp";
import {providerNameValidator} from "../validator/providerValidator";
import colors from "../../../style/colors";
import {StatementContext} from "../../../App";
import useAxiosService from "../../../service/useAxiosService";

const ProviderUpdateCmp = ({provider, reload}) => {
    const {showInfo} = React.useContext(StatementContext);
    const axiosService = useAxiosService();
    const [newName, setNewName] = React.useState(provider.name);
    const modalWindowHandler = useModalWindow();

    const providerModified = () => {
        showInfo(`Dostawca ${provider.name} został zaktualizowany`);
        reload();
        modalWindowHandler.hideModalWindow();
    };

    const updateProviderRequest = () => {
        const requestBody = {providerId: provider.id, newName};
        axiosService.patch(`/api/providers/name`, requestBody, providerModified);
    }
    const modifyButtonOnClick = () => {
        if (providerNameValidator.validate(newName)) {
            updateProviderRequest();
        } else
            showInfo("Sprawdź poprawność wprowadzonych danych", true);
    };

    return <FormCmp>
        <ButtonCmp title="Modyfikuj" onClick={modalWindowHandler.showModalWindow}/>
        <ModalWindowCmp title={`Modyfikuj dostawce - ${provider.name}`} modalHandler={modalWindowHandler}>
            <InputTextCmp
                title="Nazwa"
                value={newName}
                setValue={setNewName}
                placeholder={"Wpisz nazwę dostawcy"}
                validation={providerNameValidator}
            />
            <ButtonCmp onClick={modifyButtonOnClick} title="Modyfikuj" color={colors.success}/>
        </ModalWindowCmp>
    </FormCmp>
}

export default ProviderUpdateCmp;