import React from "react";
import PageCmp from "../../component/PageCmp";
import {useLocation, useNavigate} from "react-router-dom";
import LoadingWrapper from "../../component/LoadingWrapper";
import ElementDetailsCmp from "./component/ElementDetailsCmp";
import ElementModifyCmp from "./component/ElementModifyCmp";
import useGetRequest from "../../service/useGetRequest";
import AssociatedElementsCmp from "./component/AssociatedElementsCmp";
import ButtonCmp from "../../component/ButtonCmp";
import FormCmp from "../../component/FormCmp";

const ElementDetailsPage = () => {
    const {state: elementData} = useLocation();
    const {result: element, reload} = useGetRequest(`/api/elements/${elementData.id}`, true);

    return <PageCmp title="Szczegóły elementu">
        <LoadingWrapper loaded={element}>
            {element && <>
                <ElementDetailsCmp element={element}/>
                <ElementModifyCmp element={element} reload={reload}/>
                <NavigateToAddAssociatedElement element={element}/>
                <AssociatedElementsCmp element={element}/>
            </>}
        </LoadingWrapper>
    </PageCmp>
}

const NavigateToAddAssociatedElement = ({element}) => {
    const navigate = useNavigate();
    const navigateBtnOnClick = () => {
        const elementData = {id: element.id, name: element.name};
        navigate("/element-add-associated", {state: elementData});
    };

    return <FormCmp><ButtonCmp onClick={navigateBtnOnClick} title="Dodaj powiązany element"/></FormCmp>
}
export default ElementDetailsPage;