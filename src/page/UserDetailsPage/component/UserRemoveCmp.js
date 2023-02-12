import React from "react";
import FormCmp from "../../../component/FormCmp";
import ButtonCmp from "../../../component/ButtonCmp";
import useModalWindow from "../../../service/useModalWindow";
import ModalWindowCmp from "../../../component/ModalWindowCmp";
import colors from "../../../style/colors";
import useAxiosService from "../../../service/useAxiosService";
import {StatementContext} from "../../../App";
import {useNavigate} from "react-router-dom";

const UserRemoveCmp = ({user}) => {
    const navigate = useNavigate();
    const modalWindowHandler = useModalWindow();
    const axiosService = useAxiosService();
    const {showInfo} = React.useContext(StatementContext);
    const userRemoved = () => {
        showInfo(`Użytkownik ${user.username} został usunięty`);
        navigate("/users");
    }
    const removeUserRequest = () => {
        axiosService.delete(`/api/users/${user.id}`, userRemoved);
    }
    const confirmRemovingBtnOnClick = () => {
        removeUserRequest();
        modalWindowHandler.hideModalWindow();
    }
    return <FormCmp>
        <ButtonCmp title={`Usuń użytkownika`} color={colors.danger} onClick={modalWindowHandler.showModalWindow}/>
        <ModalWindowCmp title={`Potwierdź usunięcie użytkownika - ${user.username}`} modalHandler={modalWindowHandler}>
            <ButtonCmp
                title={`Usuń użytkownika - ${user.username}`}
                color={colors.success}
                onClick={confirmRemovingBtnOnClick}/>
        </ModalWindowCmp>
    </FormCmp>
}

export default UserRemoveCmp;
