import React from "react";

import PageCmp from "../../component/PageCmp";
import FormCmp from "../../component/FormCmp";
import InputTextCmp from "../../component/InputTextCmp";
import ButtonCmp from "../../component/ButtonCmp";
import colors from "../../style/colors";
import {StatementContext} from "../../App";
import {emailValidator, loginValidator, passwordConfirmValidator, passwordValidator} from "./registerFromValidators";
import useAxios from "../../service/useAxios";
import {useNavigate} from "react-router-dom";

const RegisterPage = () => {
    const {showInfo} = React.useContext(StatementContext);
    const navigate = useNavigate();
    const axiosBackendHook = useAxios();

    const [login, setLogin] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [passwordConfirm, setPasswordConfirm] = React.useState("");

    function fieldsValidated() {
        return loginValidator.validate(login)
            && emailValidator.validate(email)
            && passwordValidator.validate(password)
            && passwordConfirmValidator.validate(passwordConfirm, password);
    }

    function sendRegisterRequest() {
        const requestBody = {username: login, password, email};
        axiosBackendHook.post("/api/users/register", requestBody, () => {
            showInfo(`Użytkownik ${login} został stworzony. Sprawdź email i aktywuj konto`);
            navigate("/user-confirm");
        })
    }

    function registerButtonOnClick() {
        const validationResult = fieldsValidated();
        if (validationResult) {
            sendRegisterRequest();
        } else {
            showInfo("Sprawdź poprawność danych", true);
        }
    }

    return <PageCmp title={"Rejestracja"}>
        <FormCmp>
            <InputTextCmp title="Login"
                          value={login}
                          setValue={setLogin}
                          placeholder={"Wpisz swój login"}
                          validation={loginValidator}
            />
            <InputTextCmp title="Email"
                          value={email}
                          setValue={setEmail}
                          placeholder={"Wpisz swój email"}
                          validation={emailValidator}
            />
            <InputTextCmp title="Hasło"
                          value={password}
                          setValue={setPassword}
                          placeholder={"Wpisz swoje hasło"}
                          validation={passwordValidator}
                          type="password"
            />
            <InputTextCmp title="Potwierdzenie hasła:"
                          value={passwordConfirm}
                          setValue={setPasswordConfirm}
                          placeholder={"Wpisz ponownie swoje hasło"}
                          validation={{
                              ...passwordConfirmValidator,
                              validate: (text) => passwordConfirmValidator.validate(text, password)
                          }}
                          type="password"
            />
            <ButtonCmp title="Rejestracja" color={colors.primary} onClick={registerButtonOnClick}/>
        </FormCmp>
    </PageCmp>
}

export default RegisterPage;