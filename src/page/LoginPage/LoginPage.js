import React from "react";

import PageCmp from "../../component/PageCmp";
import FormCmp from "../../component/FormCmp";
import InputTextCmp from "../../component/InputTextCmp";
import ButtonCmp from "../../component/ButtonCmp";

const LoginPage = () => {
    const [login, setLogin] = React.useState("");
    const [password, setPassword] = React.useState("");
    return <PageCmp title="Login">
        <FormCmp>
            <InputTextCmp title="Login" placeholder="Wpisz login" value={login} setValue={setLogin} />
            <InputTextCmp title="Hasło" placeholder="Wpisz hasło" value={password} setValue={setPassword} />
            <ButtonCmp title="Login" />
        </FormCmp>
    </PageCmp>
}

export default LoginPage;