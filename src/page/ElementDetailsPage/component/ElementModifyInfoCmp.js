import React from "react";
import styled from "styled-components";
import useElementCreateData from "../../ElementsPage/component/useElementCreateData";
import InputTextCmp from "../../../component/InputTextCmp";
import ButtonCmp from "../../../component/ButtonCmp";
import colors from "../../../style/colors";
import {StatementContext} from "../../../App";
import useAxiosService from "../../../service/useAxiosService";

const ElementModifyInfoCmp = ({element, closeModal, reload}) => {
    const {showInfo} = React.useContext(StatementContext);
    const axiosService = useAxiosService();

    const {
        name,
        serialNumber,
        description,
        url
    } = useElementCreateData(element.name, element.serialNumber, element.description, element.url);

    function validateData() {
        return name.validation.validate(name.value)
            && serialNumber.validation.validate(serialNumber.value)
            && url.validation.validate(url.value);
    }

    function infoUpdated() {
        showInfo("Nowe dane zostały zapisane");
        closeModal();
        reload();
    }

    function updateInfoRequest() {
        const requestBody = {
            elementId: element.id,
            name: name.value,
            description: description.value,
            serialNumber: serialNumber.value,
            url: url.value
        }
        axiosService.patch("/api/elements/info", requestBody, infoUpdated);
    }

    const saveInfoButtonOnClick = () => {
        const dataValidated = validateData();
        if (dataValidated)
            updateInfoRequest();
        else
            showInfo("Sprawdź poprawność danych", true);
    }
    return <Container>
        <InputTextCmp title="Nazwa" value={name.value} setValue={name.setValue} validation={name.validation}
                      placeholder="Wpisz nową nazwę elementu"/>
        <InputTextCmp title="Numer seryjny" value={serialNumber.value} setValue={serialNumber.setValue}
                      validation={serialNumber.validation} placeholder="Wpisz nowy numer seryjny"/>
        <InputTextCmp title="Opis" value={description.value} setValue={description.setValue}
                      validation={description.validation} placeholder="Wpisz nowy opis"/>
        <InputTextCmp title="Opis" value={url.value} setValue={url.setValue} validation={url.validation}
                      placeholder="Wklej nowy link"/>
        <ButtonCmp title="Zapisz informacje" color={colors.success} onClick={saveInfoButtonOnClick}/>
    </Container>
}

const Container = styled.div``;
export default ElementModifyInfoCmp;