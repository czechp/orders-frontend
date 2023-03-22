import ModalWindowCmp from "../../../component/ModalWindowCmp";

const PositionInExecutionDetailCmp = ({modalWindowHandler, position}) => {
    return <ModalWindowCmp modalHandler={modalWindowHandler} title={`Realizacja pozycji ${position.name}`}>

    </ModalWindowCmp>
}

export default PositionInExecutionDetailCmp;