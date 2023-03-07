import React from "react";
import PageCmp from "../../component/PageCmp";
import {useLocation} from "react-router-dom";
import ElementListCmp from "../ElementsPage/component/ElementListCmp";
import ElementAddAssociatedElementCmp from "./ElementAddAssociatedElementCmp";
import useModalWindow from "../../service/useModalWindow";

const ElementAddAssociatedElementPage = () => {
    const {state: elementData} = useLocation();
    const windowModalHandler = useModalWindow();
    const [elementToAdd, setElementToAdd] = React.useState();
    const elementSelected = (element) => {
        setElementToAdd(element);
        windowModalHandler.showModalWindow();
    }

    return <PageCmp title={`Dodaj powiązany element do ${elementData.name}`}>
        <ElementListCmp url="/api/elements" rowOnClick={elementSelected} withFilter={true}/>
        <ElementAddAssociatedElementCmp modalHandler={windowModalHandler} elementToAdd={elementToAdd}
                                        parentElement={elementData}/>
    </PageCmp>
}

export default ElementAddAssociatedElementPage;