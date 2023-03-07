import React from "react";
import ModalWindowCmp from "../../../component/ModalWindowCmp";
import ButtonCmp from "../../../component/ButtonCmp";
import useAxiosService from "../../../service/useAxiosService";
import {StatementContext} from "../../../App";
import colors from "../../../style/colors";

const AssociatedElementRemoveCmp = ({modalWindowHandler, element, elementParentId}) => {
    const axiosService = useAxiosService();
    const {showInfo} = React.useContext(StatementContext);

    function elementRemoved() {
        showInfo("Element został usunięty");
        modalWindowHandler.hideModalWindow();
    }

    const removeAssociatedBtnOnClick = () => {
        const params = {associatedElementId: element.id};
        axiosService.delete(`/api/elements/associated-elements/${elementParentId}`, elementRemoved, params);
    };

    return element ? <ModalWindowCmp modalHandler={modalWindowHandler} title={`Usuń element - ${element.name}`}>
        <ButtonCmp color={colors.success} title="Usuń powiązany element" onClick={removeAssociatedBtnOnClick}/>
    </ModalWindowCmp> : <></>
}

export default AssociatedElementRemoveCmp;