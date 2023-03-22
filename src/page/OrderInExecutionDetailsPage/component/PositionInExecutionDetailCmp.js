import ModalWindowCmp from "../../../component/ModalWindowCmp";
import PositionInExecutionOrderActivty from "./PositionInExecutionOrderActivty";

const PositionInExecutionDetailCmp = ({modalWindowHandler, position, orderId, reload}) => {
    return <ModalWindowCmp modalHandler={modalWindowHandler} title={`Realizacja pozycji ${position.name}`}>
        <PositionInExecutionOrderActivty activityName="Zamów"
                                         endpoint="/api/orders/order-position"
                                         requestBody={{orderId, positionId: position.id}}
                                         successStatement={`Pozycja ${position.name} została zamówiona`}
                                         reload={reload}
                                         closeModal={modalWindowHandler.hideModalWindow}
        />
    </ModalWindowCmp>
}

export default PositionInExecutionDetailCmp;