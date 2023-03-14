import ModalWindowCmp from "../../../component/ModalWindowCmp";

const PositionDetailsCmp = ({position, modalWindowHandler})=>{
    return position ? <ModalWindowCmp modalHandler={modalWindowHandler} title="Szczegóły pozycji">

        </ModalWindowCmp>
        :<></>;
}

export default PositionDetailsCmp;