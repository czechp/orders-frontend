import PageCmp from "../../component/PageCmp";
import GenerateRestorePasswordTokenCmp from "./component/GenerateRestorePasswordTokenCmp";
import SetNewPasswordCmp from "./component/SetNewPasswordCmp";

const RestorePasswordPage = () => {
    return <PageCmp title="Odzyskiwanie hasła">
        <GenerateRestorePasswordTokenCmp/>
        <SetNewPasswordCmp/>
    </PageCmp>
}

export default RestorePasswordPage;