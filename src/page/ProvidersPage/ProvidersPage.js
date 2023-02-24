import React from "react";
import PageCmp from "../../component/PageCmp";
import ProvidersListCmp from "./component/ProvidersListCmp";
import ProviderCreateCmp from "./component/ProviderCreateCmp";

const ProvidersPage = () => {
    return <PageCmp title="Dostawcy">
        <ProviderCreateCmp reload={reloadPage}/>
        <ProvidersListCmp reload={reloadPage}/>
    </PageCmp>
}

export default ProvidersPage;