import React from "react";
import ButtonCmp from "../../../component/ButtonCmp";
import FormCmp from "../../../component/FormCmp";
import colors from "../../../style/colors";
import InputTextCmp from "../../../component/InputTextCmp";

const ElementListFilterCmp = ({filterPattern, setFilterPattern}) => {

    const clearButtonOnClick = () => {
        setFilterPattern("");
    }
    return <FormCmp>
        <InputTextCmp placeholder="Wpisz fraze wyszukania" value={filterPattern} setValue={setFilterPattern}/>
        <ButtonCmp onClick={clearButtonOnClick} style={{marginBottom: 0}} title="Wyczyść" color={colors.danger}/>
    </FormCmp>
}


export default ElementListFilterCmp;