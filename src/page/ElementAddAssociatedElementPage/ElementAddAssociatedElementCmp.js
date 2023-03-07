import React from "react";
import ModalWindowCmp from "../../component/ModalWindowCmp";
import ElementDetailsCmp from "../ElementDetailsPage/component/ElementDetailsCmp";
import ButtonCmp from "../../component/ButtonCmp";
import colors from "../../style/colors";
import useAxiosService from "../../service/useAxiosService";
import {StatementContext} from "../../App";
import {useNavigate} from "react-router-dom";

const ElementAddAssociatedElementCmp = ({modalHandler, elementToAdd, parentElement}) => {
    const axiosService = useAxiosService();
    const {showInfo} = React.useContext(StatementContext);
    const navigate = useNavigate();

    const elementAdded = () => {
        showInfo(`Element ${elementToAdd.name} został dodany`);
        navigate("/element-details", {state: {id: parentElement.id, name: parentElement.name}});
    }
    const addBtnOnClick = () => {
        const URL = "/api/elements/associated-elements";
        const requestBody = {elementId: parentElement.id, elementIdToAdd: elementToAdd.id};
        axiosService.post(URL, requestBody, elementAdded);
    }
    return <ModalWindowCmp modalHandler={modalHandler}
                           title={`Dodaj do powiązanych elementów - ${elementToAdd ? elementToAdd.name : ""}`}>
        <ElementDetailsCmp element={elementToAdd}/>
        <ButtonCmp title="Dodaj" color={colors.success} onClick={addBtnOnClick}/>
    </ModalWindowCmp>
};

export default ElementAddAssociatedElementCmp;