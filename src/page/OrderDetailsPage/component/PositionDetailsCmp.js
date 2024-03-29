import ModalWindowCmp from "../../../component/ModalWindowCmp";
import PositionInfoCmp from "./PositionInfoCmp";
import PositionUpdateQuantityCmp from "./PositionUpdateQuantityCmp";
import PositionRemoveCmp from "./PositionRemoveCmp";

const PositionDetailsCmp = ({position, modalWindowHandler, orderId, reload}) => {
    return position ? <ModalWindowCmp modalHandler={modalWindowHandler} title="Szczegóły pozycji">
            <PositionInfoCmp position={position}/>
            {position.positionStatus === "NOT_ORDERED" && <>
                <PositionUpdateQuantityCmp position={position} reload={reload} orderId={orderId}
                                           closeModal={modalWindowHandler.hideModalWindow}/>
                <PositionRemoveCmp position={position} reload={reload} closeModal={modalWindowHandler.hideModalWindow}
                                   orderId={orderId}/>
            </>
            }
        </ModalWindowCmp>
        : <></>;
}

export default PositionDetailsCmp;