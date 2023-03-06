import React from "react";
import ElementListCmp from "../../ElementsPage/component/ElementListCmp";
import styled from "styled-components";
import useModalWindow from "../../../service/useModalWindow";
import AssociatedElementRemoveCmp from "./AssociatedElementRemoveCmp";

const AssociatedElementsCmp = ({element}) => {
    const [elementToRemove, setElementToRemove] = React.useState();
    const modalWindowHandler = useModalWindow();
    const rowOnClick = (element) => {
        setElementToRemove(element);
        modalWindowHandler.showModalWindow();
    };

    return <Container>
        <ElementListCmp reload={() => {
        }} url={`api/elements/associated-elements/${element.id}`} rowOnClick={rowOnClick}/>
        <AssociatedElementRemoveCmp modalWindowHandler={modalWindowHandler} element={elementToRemove} elementParentId={element.id}/>
    </Container>
}

const Container = styled.div`
  width: 100%;
`;
export default AssociatedElementsCmp;