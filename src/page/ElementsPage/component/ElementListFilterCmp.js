import React from "react";
import ButtonCmp from "../../../component/ButtonCmp";
import FormCmp from "../../../component/FormCmp";
import colors from "../../../style/colors";
import InputTextCmp from "../../../component/InputTextCmp";

const ElementListFilterCmp = () => {
    const [pattern, setPattern] = React.useState("");
    return <FormCmp>
        <InputTextCmp placeholder="Wpisz fraze wyszukania" value={pattern} setValue={setPattern}/>
        <ButtonCmp style={{marginBottom: 0}} title="Filtruj" color={colors.success}/>
        <ButtonCmp style={{marginBottom: 0}} title="Wyczyść" color={colors.danger}/>
    </FormCmp>
}


export default ElementListFilterCmp;