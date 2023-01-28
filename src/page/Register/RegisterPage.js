import React from "react";
import emailValid from "email-validator";

import PageCmp from "../../component/PageCmp";
import FormCmp from "../../component/FormCmp";
import InputTextCmp from "../../component/InputTextCmp";
import ButtonCmp from "../../component/ButtonCmp";
import colors from "../../style/colors";

const RegisterPage = () => {
    const [login, setLogin] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [passwordConfirm, setPasswordConfirm] = React.useState("");

    const loginValidator = {
        message: "Minimalna długość to 3 znaki",
        validate: function (text) {
            return text.length >= 3;
        }
    };

    const emailValidator = {
        message: "Niepoprawny format adresu email",
        validate: function (text) {
            return emailValid.validate(text);
        }
    };

    const passwordValidator = {
        message: "Minimalna długość to 3 znaki",
        validate: function (text) {
            return text.length >= 3;
        }
    };

    const passwordConfirmValidator = {
        message: "Podane hasła są różne",
        validate: function (text) {
            return password.localeCompare(text) === 0;
        }
    };

    function fieldsValidated() {
        const result = {validated: false, message: ""};
        if (!loginValidator.validate(login)) {
            result.message = "Login niepoprawny";
            return result;
        }
        if (!emailValidator.validate(email)) {
            result.message = "Email niepoprawny";
            return result;
        }
        if (!passwordValidator.validate(password)) {
            result.message = "Hasło nieporawne";
            return result;
        }
        if (!passwordConfirmValidator.validate(passwordConfirm)) {
            result.message = "Hasła są różne";
            return result;
        }
        result.validated=true;
        return result;
    }

    function registerButtonOnClick() {
        const validationResult = fieldsValidated();
        if (validationResult.validated) {
        } else {
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
                          validation={passwordConfirmValidator}
                          type="password"
            />
            <ButtonCmp title="Rejestracja" color={colors.primary} onClick={registerButtonOnClick} />
        </FormCmp>
    </PageCmp>
}

export default RegisterPage;