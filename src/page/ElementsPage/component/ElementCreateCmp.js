import ButtonCmp from "../../../component/ButtonCmp";
import FormCmp from "../../../component/FormCmp";
import useAxiosService from "../../../service/useAxiosService";
import React from "react";
import useModalWindow from "../../../service/useModalWindow";
import ModalWindowCmp from "../../../component/ModalWindowCmp";
import useGetRequest from "../../../service/useGetRequest";
import useElementCreateData from "./useElementCreateData";
import SelectCmp from "../../../component/SelectCmp";
import InputTextCmp from "../../../component/InputTextCmp";
import colors from "../../../style/colors";
import {StatementContext} from "../../../App";

const ElementCreateCmp = ({reload}) => {
    const {showInfo} = React.useContext(StatementContext);
    const axiosService = useAxiosService();
    const modalWindowHandler = useModalWindow();
    const createData = useElementCreateData();
    const {result: producers} = useGetRequest("/api/producers");
    const {result: categories} = useGetRequest("/api/categories");
    const {result: providers} = useGetRequest("/api/providers");

    function generateSelectArray(data) {
        return data.map((el) => {
            return {text: el.name, value: el.id}
        });
    }

    function elementCreated() {
        showInfo("Element został stworzony");
        modalWindowHandler.hideModalWindow();
        reload();
        createData.clear();
    }

    function createElementRequest() {
        const requestBody = {
            producerId: createData.producer.value,
            categoryId: createData.category.value,
            providerId: createData.provider.value,
            name: createData.name.value,
            description: createData.description.value,
            url: createData.url.value,
            serialNumber: createData.serialNumber.value
        };

        axiosService.post("/api/elements", requestBody, elementCreated);
    }

    function createButtonOnClick() {
        if (createData.validateAllData())
            createElementRequest();
        else
            showInfo("Sprwdź poprawność danych", true);
    }


    return <FormCmp>
        <ButtonCmp title="Dodaj element" onClick={() => modalWindowHandler.showModalWindow()}/>
        <ModalWindowCmp title="Dodaj nowy element" modalHandler={modalWindowHandler}>
            <InputTextCmp value={createData.name.value} setValue={createData.name.setValue} title="Nazwa"
                          placeholder="Wpisz nazwę elementu" validation={createData.name.validation}/>
            <InputTextCmp value={createData.serialNumber.value} setValue={createData.serialNumber.setValue}
                          title="Numer seryjny"
                          placeholder="Wpisz numer seryjny" validation={createData.serialNumber.validation}/>
            <InputTextCmp value={createData.description.value} setValue={createData.description.setValue} title="Opis"
                          placeholder="Wpisz opis"/>
            <InputTextCmp value={createData.url.value} setValue={createData.url.setValue} title="Link"
                          placeholder="Wklej link" validation={createData.url.validation}/>
            <SelectCmp value={createData.producer.value} setValue={createData.producer.setProducer}
                       options={generateSelectArray(producers)}
                       title="Wybierz producenta"/>
            <SelectCmp value={createData.category.value} setValue={createData.category.setCategory}
                       options={generateSelectArray(categories)}
                       title="Wybierz kategorie"/>
            <SelectCmp value={createData.provider.value} setValue={createData.provider.setProvider}
                       options={generateSelectArray(providers)}
                       title="Wybierz dostawce"/>
            <ButtonCmp title="Dodaj element" color={colors.success} onClick={createButtonOnClick}/>
        </ModalWindowCmp>
    </FormCmp>
}

export default ElementCreateCmp;