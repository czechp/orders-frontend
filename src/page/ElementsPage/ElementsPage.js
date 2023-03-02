import React from "react";
import PageCmp from "../../component/PageCmp";
import ElementListCmp from "./component/ElementListCmp";
import ElementCreateCmp from "./component/ElementCreateCmp";

const ElementsPage = () => {
    const [reload, setReload] = React.useState(false);

    function reloadPage() {
        setReload((prev) => !prev);
    }

    return <PageCmp title={"Elementy"}>
        <ElementCreateCmp reload={reloadPage}/>
        <ElementListCmp reload={reload}/>
    </PageCmp>
}

export default ElementsPage;