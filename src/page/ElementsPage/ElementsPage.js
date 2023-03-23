import React from "react";
import PageCmp from "../../component/PageCmp";
import ElementListCmp from "./component/ElementListCmp";
import ElementCreateCmp from "./component/ElementCreateCmp";
import {useNavigate} from "react-router-dom";

const ElementsPage = () => {
    const [reload, setReload] = React.useState(false);
    const navigate = useNavigate();
    const navigateToDetails = (element) => {
        const elementData = {id: element.id};
        navigate("/element-details", {state: elementData})
    }

    function reloadPage() {
        setReload((prev) => !prev);
    }

    return <PageCmp title={"Elementy"}>
        <ElementCreateCmp reload={reloadPage}/>
        <ElementListCmp reload={reload} url={"/api/elements"} withFilter={true} rowOnClick={navigateToDetails}/>
    </PageCmp>
}

export default ElementsPage;