import React from "react";
import FormCmp from "../../../component/FormCmp";
import ButtonCmp from "../../../component/ButtonCmp";
import colors from "../../../style/colors";
import useModalWindow from "../../../service/useModalWindow";
import ModalWindowCmp from "../../../component/ModalWindowCmp";
import useAxiosService from "../../../service/useAxiosService";
import {StatementContext} from "../../../App";
import {useNavigate} from "react-router-dom";

const CategoryRemoveCmp = ({category}) => {
    const navigate = useNavigate();
    const {showInfo} = React.useContext(StatementContext);
    const modalWindowHandler = useModalWindow();
    const axiosService = useAxiosService();
    const categoryRemoved = () => {
        modalWindowHandler.hideModalWindow();
        showInfo(`Kategoria: ${category.name} została usunięta`);
        navigate("/categories");
    };
    const confirmRemoveBtnOnClick = () => {
        axiosService.delete(`/api/categories/${category.id}`, categoryRemoved);
        modalWindowHandler.hideModalWindow();
    };

    return <FormCmp>
        <ButtonCmp title={"Usuń"} color={colors.danger} onClick={modalWindowHandler.showModalWindow}/>
        <ModalWindowCmp modalHandler={modalWindowHandler}
                        title={`Potwierdzenie usunięcia kategorii - ${category.name}`}>
            <ButtonCmp title="Usuń" color={colors.success} onClick={confirmRemoveBtnOnClick}/>
        </ModalWindowCmp>
    </FormCmp>
}

export default CategoryRemoveCmp;