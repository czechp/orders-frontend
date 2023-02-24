import React from "react";
import FormCmp from "../../../component/FormCmp";
import ButtonCmp from "../../../component/ButtonCmp";
import useModalWindow from "../../../service/useModalWindow";
import ModalWindowCmp from "../../../component/ModalWindowCmp";
import InputTextCmp from "../../../component/InputTextCmp";
import colors from "../../../style/colors";
import useAxiosService from "../../../service/useAxiosService";
import {StatementContext} from "../../../App";
import {categoryNameValidator} from "../../CategoryDetailsPage/validator/categoryNameValidator";

const CategoryCreateCmp = ({reload}) => {
    const modalWindowHandler = useModalWindow();
    const {showInfo} = React.useContext(StatementContext);
    const axiosService = useAxiosService();
    const [categoryName, setCategoryName] = React.useState("");

    const providerCreated = () => {
        showInfo(`Kategoria - ${categoryName} został utworzony`);
        modalWindowHandler.hideModalWindow();
        reload();
    }
    const createProviderRequest = () => {
        const requestBody = {name: categoryName};
        axiosService.post("/api/categories", requestBody, providerCreated);
    };

    const buttonCreateOnClick = () => {
        if (categoryNameValidator.validate(categoryName)) createProviderRequest(); else showInfo("Sprawdź poprawność danych", true);
    };

    return <FormCmp>
        <ButtonCmp title="Stwórz kategorie" onClick={modalWindowHandler.showModalWindow}/>
        <ModalWindowCmp modalHandler={modalWindowHandler}>
            <InputTextCmp title="Nazwa kategorii"
                          value={categoryName}
                          setValue={setCategoryName}
                          placeholder="Wpisz nazwę kategorii"
                          validation={categoryNameValidator}
            />
            <ButtonCmp title="Dodaj" color={colors.success} onClick={buttonCreateOnClick}/>
        </ModalWindowCmp>
    </FormCmp>
}
export default CategoryCreateCmp;