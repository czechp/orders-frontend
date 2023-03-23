import React from "react";
import styled from "styled-components";
import ButtonCmp from "../../../component/ButtonCmp";
import colors from "../../../style/colors";
import InputTextCmp from "../../../component/InputTextCmp";
import SelectCmp from "../../../component/SelectCmp";
import positionUnit from "../../../constant/positionUnit";


const OrderAddPositionFormCmp = ({addOnClick}) => {
    const [quantity, setQuantity] = React.useState(0);
    const [unit, setUnit] = React.useState("PCS");
    const addButtonOnClick = () => {
        addOnClick({quantity, positionUnit: unit});
    }
    return <Container>
        <FormWrapper>
            <InputTextCmp style={{width: "40%"}} title="Ilość" setValue={setQuantity} value={quantity} type="number"/>
            <SelectCmp style={{width: "40%"}} title="Jednostka" setValue={setUnit} value={unit} options={positionUnit}/>
        </FormWrapper>

        <ButtonCmp color={colors.success} title="Dodaj pozycję" onClick={addButtonOnClick}/>
    </Container>
}

const Container = styled.div`
  width: 100%;
`;

const FormWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
export default OrderAddPositionFormCmp;
