import React from "react";
import PageCmp from "../../component/PageCmp";
import ElementListCmp from "./component/ElementListCmp";
import ElementCreateCmp from "../ElementDetailsPage/component/ElementCreateCmp";

const ElementsPage = () => {
    return <PageCmp title={"Elementy"}>
        <ElementCreateCmp/>
        <ElementListCmp/>
    </PageCmp>
}

export default ElementsPage;