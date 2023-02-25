import React from "react";
import FormCmp from "../../../component/FormCmp";
import useModalWindow from "../../../service/useModalWindow";
import ButtonCmp from "../../../component/ButtonCmp";
import ModalWindowCmp from "../../../component/ModalWindowCmp";
import InputTextCmp from "../../../component/InputTextCmp";
import colors from "../../../style/colors";
import {StatementContext} from "../../../App";
import useAxiosService from "../../../service/useAxiosService";
import {producerNameValidator} from "../validator/producerNameValidator";

const ProducerUpdateCmp = ({producer, reload}) => {
    const {showInfo} = React.useContext(StatementContext);
    const axiosService = useAxiosService();
    const [newName, setNewName] = React.useState(producer.name);
    const modalWindowHandler = useModalWindow();

    const producerModified = () => {
        showInfo(`Producent ${producer.name} został zaktualizowany`);
        reload();
        modalWindowHandler.hideModalWindow();
    };

    const updateProviderRequest = () => {
        const requestBody = {producerId: producer.id, newName};
        axiosService.patch(`/api/producers/name`, requestBody, producerModified);
    }
    const modifyButtonOnClick = () => {
        if (producerNameValidator.validate(newName)) {
            updateProviderRequest();
        } else
            showInfo("Sprawdź poprawność wprowadzonych danych", true);
    };

    return <FormCmp>
        <ButtonCmp title="Modyfikuj" onClick={modalWindowHandler.showModalWindow}/>
        <ModalWindowCmp title={`Modyfikuj producenta - ${producer.name}`} modalHandler={modalWindowHandler}>
            <InputTextCmp
                title="Nazwa"
                value={newName}
                setValue={setNewName}
                placeholder={"Wpisz nazwę producenta"}
                validation={producerNameValidator}
            />
            <ButtonCmp onClick={modifyButtonOnClick} title="Modyfikuj" color={colors.success}/>
        </ModalWindowCmp>
    </FormCmp>
}

export default ProducerUpdateCmp;