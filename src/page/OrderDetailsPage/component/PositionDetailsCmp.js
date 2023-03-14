import ModalWindowCmp from "../../../component/ModalWindowCmp";
import PositionInfoCmp from "./PositionInfoCmp";

const PositionDetailsCmp = ({position, modalWindowHandler})=>{
    return position ? <ModalWindowCmp modalHandler={modalWindowHandler} title="Szczegóły pozycji">
            <PositionInfoCmp position={position}/>
        </ModalWindowCmp>
        :<></>;
}

export default PositionDetailsCmp;