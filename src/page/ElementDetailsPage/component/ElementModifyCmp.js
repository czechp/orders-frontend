import FormCmp from "../../../component/FormCmp";
import ButtonCmp from "../../../component/ButtonCmp";
import colors from "../../../style/colors";
import useModalWindow from "../../../service/useModalWindow";
import ModalWindowCmp from "../../../component/ModalWindowCmp";
import ElementModifyInfoCmp from "./ElementModifyInfoCmp";
import ElementModifyProviderCmp from "./ElementModifyProviderCmp";

const ElementModifyCmp = ({element, reload}) => {
    const modalWindowHandler = useModalWindow();
    return <FormCmp>
        <ButtonCmp title="Modyfikuj element" color={colors.warning} onClick={modalWindowHandler.showModalWindow}/>
        <ModalWindowCmp modalHandler={modalWindowHandler}
                        title={`Modyfikacja elementu: ${element.name}`}
        >
            <ElementModifyInfoCmp element={element} closeModal={modalWindowHandler.hideModalWindow} reload={reload}/>
            <ElementModifyProviderCmp element={element} reload={reload} closeModalWindow={modalWindowHandler.hideModalWindow}/>
        </ModalWindowCmp>
    </FormCmp>
}

export default  ElementModifyCmp;