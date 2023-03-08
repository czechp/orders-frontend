import React from "react";

import PageCmp from "../../component/PageCmp";
import FormCmp from "../../component/FormCmp";
import InputTextCmp from "../../component/InputTextCmp";
import ButtonCmp from "../../component/ButtonCmp";
import useAxiosService from "../../service/useAxiosService";
import {StatementContext} from "../../App";
import useAuthenticationService from "../../service/useAuthenticationService";
import {useNavigate} from "react-router-dom";

const LoginPage = () => {
    const navigate = useNavigate();

    const authenticationService = useAuthenticationService();
    const {showInfo} = React.useContext(StatementContext);
    const axiosBackendHook = useAxiosService();

    const [login, setLogin] = React.useState("");
    const [password, setPassword] = React.useState("");

    const userLogged = (response) => {
        showInfo(`Użytkownik ${login} zalogowany`);
        const email = response.data.email;
        const role = response.data.role;
        authenticationService.login(login, password, email, role);
        navigate("/");
    }

    const loginBtnOnClick = () => {
        const requestBody = {login, password};
        axiosBackendHook.post("/api/login", requestBody, userLogged);
    }


    return <PageCmp title="Login">
        <FormCmp>
            <InputTextCmp title="Login" placeholder="Wpisz login" value={login} setValue={setLogin}/>
            <InputTextCmp title="Hasło" placeholder="Wpisz hasło" value={password} setValue={setPassword}
                          type="password"/>
            <ButtonCmp onClick={loginBtnOnClick} title="Login"/>
        </FormCmp>
    </PageCmp>
}

export default LoginPage;