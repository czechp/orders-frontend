import React from "react";
import styled from "styled-components";
import ButtonCmp from "../../../component/ButtonCmp";
import FormCmp from "../../../component/FormCmp";
import useModalWindow from "../../../service/useModalWindow";
import ModalWindowCmp from "../../../component/ModalWindowCmp";
import colors from "../../../style/colors";
import useAxiosService from "../../../service/useAxiosService";
import {StatementContext} from "../../../App";

const UserConfirmByAdminCmp = ({user, reloadUser}) => {
    const modalWindowHandler = useModalWindow();
    const axiosService = useAxiosService();
    const {showInfo} = React.useContext(StatementContext);

    const activationChanged = (state) => {
        showInfo(`Konto użytkownika ${user.username} zostało ${state ? "odblokowanie" : "zablokowane"}`);
        reloadUser();

    }
    const setActivationRequest = (state) => {
        axiosService.patch(`/api/users/confirm-by-admin/${user.id}`,
            {},
            () => activationChanged(state),
            {
                activation: state
            });
    }
    const changeActivationBtnOnClick = (state) => {
        setActivationRequest(state);
        modalWindowHandler.hideModalWindow();
    }

    return <FormCmp>
        <ButtonCmp title="Aktywuj użytkownika" onClick={modalWindowHandler.showModalWindow}/>
        <ModalWindowCmp title="Aktywacja użytkownika" modalHandler={modalWindowHandler}>
            <ButtonCmp onClick={() => changeActivationBtnOnClick(true)} title="Aktywuj" color={colors.success}/>
            <ButtonCmp onClick={() => changeActivationBtnOnClick(false)} title="Dezaktywuj" color={colors.warning}/>
        </ModalWindowCmp>
    </FormCmp>
}

const Container = styled.div`
  width: 100%;
`;

export default UserConfirmByAdminCmp;