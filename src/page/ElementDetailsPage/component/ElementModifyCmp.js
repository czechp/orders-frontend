import FormCmp from "../../../component/FormCmp";
import ButtonCmp from "../../../component/ButtonCmp";
import colors from "../../../style/colors";
import useModalWindow from "../../../service/useModalWindow";
import ModalWindowCmp from "../../../component/ModalWindowCmp";
import ElementModifyInfoCmp from "./ElementModifyInfoCmp";
import ElementModifyFieldCmp from "./ElementModifyFieldCmp";

const ElementModifyCmp = ({element, reload}) => {
    const modalWindowHandler = useModalWindow();
    return <FormCmp>
        <ButtonCmp title="Modyfikuj element" color={colors.warning} onClick={modalWindowHandler.showModalWindow}/>
        <ModalWindowCmp modalHandler={modalWindowHandler}
                        title={`Modyfikacja elementu: ${element.name}`}
        >
            <ElementModifyInfoCmp element={element} closeModal={modalWindowHandler.hideModalWindow} reload={reload}/>
            <ElementModifyFieldCmp label={"Dostawca"}
                                   element={element}
                                   reload={reload}
                                   closeModalWindow={modalWindowHandler.hideModalWindow}
                                   sourceEndpoint="/api/providers"
                                   targetEndpoint="/api/elements/provider"
                                   fieldName={"provider"}
            />
            <ElementModifyFieldCmp label={"Kategoria"}
                                   element={element}
                                   reload={reload}
                                   closeModalWindow={modalWindowHandler.hideModalWindow}
                                   sourceEndpoint="/api/categories"
                                   targetEndpoint="/api/elements/category"
                                   fieldName={"category"}
            />
            <ElementModifyFieldCmp label={"Producent"}
                                   element={element}
                                   reload={reload}
                                   closeModalWindow={modalWindowHandler.hideModalWindow}
                                   sourceEndpoint="/api/producers"
                                   targetEndpoint="/api/elements/producer"
                                   fieldName={"producer"}
            />
        </ModalWindowCmp>
    </FormCmp>
}

export default ElementModifyCmp;