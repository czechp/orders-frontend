import React from "react";
import PageCmp from "../../component/PageCmp";
import ProvidersListCmp from "./component/ProvidersListCmp";
import ProviderCreateCmp from "./component/ProviderCreateCmp";

const ProvidersPage = () => {
    const [reload, setReload] = React.useState(false);
    const reloadPage = () => setReload((prevState) => !prevState);

    return <PageCmp title="Dostawcy">
        <ProviderCreateCmp reload={reloadPage}/>
        <ProvidersListCmp reload={reloadPage}/>
    </PageCmp>
}

export default ProvidersPage;