import React from "react";
import styled from "styled-components";
import ElementListCmp from "../../ElementsPage/component/ElementListCmp";
import useModalWindow from "../../../service/useModalWindow";
import ModalWindowCmp from "../../../component/ModalWindowCmp";
import ElementDetailsCmp from "../../ElementDetailsPage/component/ElementDetailsCmp";
import OrderAddPositionFormCmp from "./OrderAddPositionFormCmp";
import useAxiosService from "../../../service/useAxiosService";
import {StatementContext} from "../../../App";

const OrderAddPositionCmp = ({order, reload}) => {
    const modalWindowHandler = useModalWindow();
    const [selectedElement, setSelectedElement] = React.useState();
    const axiosService = useAxiosService();
    const {showInfo} = React.useContext(StatementContext);
    const elementSelected = (element) => {
        modalWindowHandler.showModalWindow();
        setSelectedElement(element);
    }

    const positionAdded = () => {
        showInfo(`Pozycja - ${selectedElement.name} została dodana`);
        reload();
    }
    const addPositionRequest = (positionData) => {
        modalWindowHandler.hideModalWindow();
        const requestBody = {
            orderId: order.id,
            elementId: selectedElement.id,
            ...positionData
        };
        axiosService.post("/api/orders/position", requestBody, positionAdded);
    }
    return <Container>
        <Title>Dodaj pozycje</Title>
        <ElementListCmp reload={() => {
        }} url={"/api/elements"} withFilter={true} rowOnClick={elementSelected}/>
        <ModalWindowCmp modalHandler={modalWindowHandler} title="Dodaj pozycję">
            <ElementDetailsCmp element={selectedElement}/>
            <OrderAddPositionFormCmp addOnClick={addPositionRequest}/>
        </ModalWindowCmp>
    </Container>
}

const Container = styled.div`
  width: 100%;
  margin-top: 3rem
`;
const Title = styled.h3``;
export default OrderAddPositionCmp;