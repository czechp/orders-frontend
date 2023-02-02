import React from "react";

import PageCmp from "../../component/PageCmp";
import FormCmp from "../../component/FormCmp";
import InputTextCmp from "../../component/InputTextCmp";
import ButtonCmp from "../../component/ButtonCmp";
import useAxios from "../../service/useAxios";
import {StatementContext} from "../../App";
import {useNavigate} from "react-router-dom";

const ConfirmUserPage = () => {
    const axiosBackendHook = useAxios();
    const {showInfo} = React.useContext(StatementContext);
    const navigate = useNavigate();

    const [confirmationToken, setConfirmationToken] = React.useState("");
    const confirmTokenValidator = {
        message: "Token aktywacyjny musi mieć 36 znaków",
        validate: (text) => text.length >= 36
    };

    function confirmButtonOnClick() {
        const tokenValidated = confirmTokenValidator.validate(confirmationToken);
        if (tokenValidated) {
            sendConfirmationRequest();
        } else {
            showInfo("Sprawność poprawność wprowadzonego tokena", true);
        }
    }

    function userConfirmed() {
        showInfo("Tożsamość potwierdzona. Czekaj na aktywację konta przez administratora.");
        navigate("/login");
    }

    function sendConfirmationRequest() {
        axiosBackendHook.post("/api/users/confirm", {confirmationToken}, userConfirmed);
    }

    return <PageCmp title="Aktywuj konto">
        <FormCmp>
            <InputTextCmp
                title={"Token aktywacyjny"}
                placeholder={"Wklej token aktywacyjny"}
                validation={confirmTokenValidator}
                value={confirmationToken}
                setValue={setConfirmationToken}
            />
            <ButtonCmp title="Aktywuj konto" onClick={confirmButtonOnClick}/>
        </FormCmp>
    </PageCmp>;
}

export default ConfirmUserPage;