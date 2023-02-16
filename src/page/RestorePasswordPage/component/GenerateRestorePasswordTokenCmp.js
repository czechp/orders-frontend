import React from "react";
import FormCmp from "../../../component/FormCmp";
import InputTextCmp from "../../../component/InputTextCmp";
import {emailValidator} from "../../RegisterPage/registerFromValidators";
import ButtonCmp from "../../../component/ButtonCmp";
import useAxiosService from "../../../service/useAxiosService";
import {StatementContext} from "../../../App";

const GenerateRestorePasswordTokenCmp = () => {
    const axiosService = useAxiosService();
    const {showInfo} = React.useContext(StatementContext);
    const [email, setEmail] = React.useState("");
    const validateEmail = {
        message: "Niepoprawny format adresu email",
        validate: (email) => emailValidator.validate(email)
    };

    const tokenGenerated = () => {
        showInfo(`Token został wysłany na adres ${email}`);
    }

    const sendRequestToGenerateToken = () => {
        axiosService.post("/users/password-restore", {}, tokenGenerated, {email});
    }
    const generateRestoreTokenOnClick = () => {
        if (emailValidator.validate(email)) {
            sendRequestToGenerateToken();
        } else {
            showInfo("Niepoprawny adres email", true);
        }
    }

    return <FormCmp>
        <InputTextCmp value={email} setValue={setEmail} validation={validateEmail} placeholder="Wpisz swój adres email"
                      title="Adres email"/>
        <ButtonCmp title="Wyslij token odzyskiwania hasła" onClick={generateRestoreTokenOnClick}/>
    </FormCmp>
}

export default GenerateRestorePasswordTokenCmp;