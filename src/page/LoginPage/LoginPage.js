import React from "react";

import PageCmp from "../../component/PageCmp";
import FormCmp from "../../component/FormCmp";
import InputTextCmp from "../../component/InputTextCmp";
import ButtonCmp from "../../component/ButtonCmp";
import useAxios from "../../service/useAxios";
import {StatementContext} from "../../App";

const LoginPage = () => {
    const {showInfo} = React.useContext(StatementContext);
    const axiosBackendHook = useAxios();

    const [login, setLogin] = React.useState("");
    const [password, setPassword] = React.useState("");

    const userLogged = () => {
        showInfo(`Użytkownik ${login} zalogowany`);
    }

    const loginBtnOnClick = () => {
        const requestBody = {login, password};
        axiosBackendHook.post("/api/login", requestBody, userLogged);

    }


    return <PageCmp title="Login">
        <FormCmp>
            <InputTextCmp title="Login" placeholder="Wpisz login" value={login} setValue={setLogin}/>
            <InputTextCmp title="Hasło" placeholder="Wpisz hasło" value={password} setValue={setPassword}/>
            <ButtonCmp onClick={loginBtnOnClick} title="Login"/>
        </FormCmp>
    </PageCmp>
}

export default LoginPage;