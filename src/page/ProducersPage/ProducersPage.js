import React from "react";
import PageCmp from "../../component/PageCmp";
import ProducersListCmp from "./component/ProducersListCmp";
import ProducerCreateCmp from "./component/ProducerCreateCmp";

const ProducersPage = () => {
    // eslint-disable-next-line no-unused-vars
    const [reload, setReload] = React.useState(false);
    const reloadPage = () => setReload((prevState) => !prevState);

    return <PageCmp title="Producenci">
        <ProducerCreateCmp reload={reloadPage}/>
        <ProducersListCmp reload={reloadPage}/>
    </PageCmp>
}

export default ProducersPage;