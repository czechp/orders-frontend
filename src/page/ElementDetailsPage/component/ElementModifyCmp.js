import FormCmp from "../../../component/FormCmp";
import ButtonCmp from "../../../component/ButtonCmp";
import colors from "../../../style/colors";

const ElementModifyCmp = ({element}) => {
    return <FormCmp>
        <ButtonCmp title="Modyfikuj element" color={colors.warning}/>
    </FormCmp>
}

export default  ElementModifyCmp;