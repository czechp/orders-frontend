import React from "react";
import FormCmp from "../../component/FormCmp";
import ButtonCmp from "../../component/ButtonCmp";
import colors from "../../style/colors";
import useModalWindow from "../../service/useModalWindow";
import ModalWindowCmp from "../../component/ModalWindowCmp";
import useAxiosService from "../../service/useAxiosService";
import {StatementContext} from "../../App";
import {useNavigate} from "react-router-dom";

const ElementRemoveCmp = ({element}) => {
    const modalWindowHandler = useModalWindow();
    const axiosService = useAxiosService();
    const {showInfo} = React.useContext(StatementContext);
    const navigate = useNavigate();
    const elementRemoved = () => {
        showInfo(`Element ${element.name} został usunięty`);
        navigate("/elements");
    }

    const removeBtnOnClick = () => {
        axiosService.delete(`/api/elements/${element.id}`, elementRemoved);
    };

    return <FormCmp>
        <ButtonCmp title="Usuń" color={colors.danger} onClick={modalWindowHandler.showModalWindow}/>
        <ModalWindowCmp modalHandler={modalWindowHandler} title={`Potwierdz usunięcie  - ${element.name}`}>
            <ButtonCmp color={colors.success} title="Usuń" onClick={removeBtnOnClick}/>
        </ModalWindowCmp>
    </FormCmp>
}

export default ElementRemoveCmp;