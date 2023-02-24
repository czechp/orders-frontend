import React from "react";
import FormCmp from "../../../component/FormCmp";
import useModalWindow from "../../../service/useModalWindow";
import ButtonCmp from "../../../component/ButtonCmp";
import ModalWindowCmp from "../../../component/ModalWindowCmp";
import InputTextCmp from "../../../component/InputTextCmp";
import {categoryNameValidator} from "../validator/categoryNameValidator";
import colors from "../../../style/colors";
import {StatementContext} from "../../../App";
import useAxiosService from "../../../service/useAxiosService";

const CategoryUpdateCmp = ({category, reload}) => {
    const {showInfo} = React.useContext(StatementContext);
    const axiosService = useAxiosService();
    const [newName, setNewName] = React.useState(category.name);
    const modalWindowHandler = useModalWindow();

    const providerModified = () => {
        showInfo(`Kategoria ${category.name} została zaktualizowana`);
        reload();
        modalWindowHandler.hideModalWindow();
    };

    const updateProviderRequest = () => {
        const requestBody = {categoryId: category.id, newName};
        axiosService.patch(`/api/categories/name`, requestBody, providerModified);
    }
    const modifyButtonOnClick = () => {
        if (categoryNameValidator.validate(newName)) {
            updateProviderRequest();
        } else
            showInfo("Sprawdź poprawność wprowadzonych danych", true);
    };

    return <FormCmp>
        <ButtonCmp title="Modyfikuj" onClick={modalWindowHandler.showModalWindow}/>
        <ModalWindowCmp title={`Modyfikuj kategorie - ${category.name}`} modalHandler={modalWindowHandler}>
            <InputTextCmp
                title="Nazwa"
                value={newName}
                setValue={setNewName}
                placeholder={"Wpisz nazwę kategorii"}
                validation={categoryNameValidator}
            />
            <ButtonCmp onClick={modifyButtonOnClick} title="Modyfikuj" color={colors.success}/>
        </ModalWindowCmp>
    </FormCmp>
}

export default CategoryUpdateCmp;