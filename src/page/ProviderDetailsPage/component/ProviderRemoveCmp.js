import React from "react";
import FormCmp from "../../../component/FormCmp";
import ButtonCmp from "../../../component/ButtonCmp";
import colors from "../../../style/colors";
import useModalWindow from "../../../service/useModalWindow";
import ModalWindowCmp from "../../../component/ModalWindowCmp";
import useAxiosService from "../../../service/useAxiosService";
import {StatementContext} from "../../../App";
import {useNavigate} from "react-router-dom";

const ProviderRemoveCmp = ({provider}) => {
    const navigate = useNavigate();
    const {showInfo} = React.useContext(StatementContext);
    const modalWindowHandler = useModalWindow();
    const axiosService = useAxiosService();
    const providerRemoved = () => {
        modalWindowHandler.hideModalWindow();
        showInfo(`Dostawaca: ${provider.name} został usunięty`);
        navigate("/providers");
    };
    const confirmRemoveBtnOnClick = () => {
        axiosService.delete(`/api/providers/${provider.id}`, providerRemoved);
        modalWindowHandler.hideModalWindow();
    };

    return <FormCmp>
        <ButtonCmp title={"Usuń"} color={colors.danger} onClick={modalWindowHandler.showModalWindow}/>
        <ModalWindowCmp modalHandler={modalWindowHandler} title={`Potwierdzenie usunięcia dostawcy - ${provider.name}`}>
            <ButtonCmp title="Usuń" color={colors.success} onClick={confirmRemoveBtnOnClick}/>
        </ModalWindowCmp>
    </FormCmp>
}

export default ProviderRemoveCmp;