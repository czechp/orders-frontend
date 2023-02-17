import React from "react";
import FormCmp from "../../../component/FormCmp";
import ButtonCmp from "../../../component/ButtonCmp";
import useModalWindow from "../../../service/useModalWindow";
import ModalWindowCmp from "../../../component/ModalWindowCmp";
import InputTextCmp from "../../../component/InputTextCmp";
import {passwordConfirmValidator, passwordValidator} from "../../RegisterPage/registerFromValidators";
import colors from "../../../style/colors";
import {StatementContext} from "../../../App";
import useAxiosService from "../../../service/useAxiosService";
import {useNavigate} from "react-router-dom";

const SetNewPasswordCmp = () => {
    const modalWindowHandler = useModalWindow();
    const axiosService = useAxiosService();
    const navigate = useNavigate();
    const {showInfo} = React.useContext(StatementContext);
    const [restorePasswordToken, setRestorePasswordToken] = React.useState("");
    const [newPassword, setNewPassword] = React.useState("");
    const [confirmNewPassword, setConfirmNewPassword] = React.useState("");

    const validateForm = () => tokenValidator.validate(restorePasswordToken)
        && passwordValidator.validate(newPassword)
        && passwordConfirmValidator.validate(confirmNewPassword, newPassword);

    const newPasswordSet = () => {
        showInfo("Nowe hasło zostało ustawione. Możesz się teraz zalogować");
        navigate("/login");
    }
    const sendSetNewPasswordRequest = () => {
        const requestBody = {token: restorePasswordToken, newPassword};
        axiosService.post("/api/users/set-new-password", requestBody, newPasswordSet)
    };
    const savePasswordBtnOnClick = () => {
        const formValidated = validateForm();
        if (formValidated) {
            sendSetNewPasswordRequest();
        } else {
            showInfo("Sprawdź poprawność wprowadzonych danych", true);
        }
    };

    return <FormCmp>
        <ButtonCmp title="Użyj tokenu i ustaw nowe hasło" onClick={modalWindowHandler.showModalWindow}/>
        <ModalWindowCmp modalHandler={modalWindowHandler} title={"Ustaw nowe hasło"}>
            <InputTextCmp value={restorePasswordToken}
                          setValue={setRestorePasswordToken}
                          title="Token odzyskiwania hasła"
                          placeholder="Wklej token otrzymany na adres email"
                          validation={tokenValidator}/>
            <InputTextCmp value={newPassword}
                          setValue={setNewPassword}
                          title="Nowe hasło"
                          placeholder="Wpisz nowe hasło"
                          type="password"
                          validation={passwordValidator}/>
            <InputTextCmp value={confirmNewPassword}
                          setValue={setConfirmNewPassword}
                          title="Potwierdź hasło"
                          placeholder="Wpisz nowe hasło raz jeszcze"
                          type="password"
                          validation={{
                              ...passwordConfirmValidator,
                              validate: (text) => passwordConfirmValidator.validate(text, newPassword)
                          }}/>
            <ButtonCmp title="Zapisz hasło" color={colors.success} onClick={savePasswordBtnOnClick}/>
        </ModalWindowCmp>
    </FormCmp>
}
export const tokenValidator = {
    message: "Minimalna długość to 10 znaków",
    validate: function (text) {
        return text.length >= 10;
    }
};
export default SetNewPasswordCmp;