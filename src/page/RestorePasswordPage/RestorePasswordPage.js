import PageCmp from "../../component/PageCmp";
import GenerateRestorePasswordTokenCmp from "./component/GenerateRestorePasswordTokenCmp";

const RestorePasswordPage = () => {
    return <PageCmp title="Odzyskiwanie hasła">
        <GenerateRestorePasswordTokenCmp />
    </PageCmp>
}

export default RestorePasswordPage;