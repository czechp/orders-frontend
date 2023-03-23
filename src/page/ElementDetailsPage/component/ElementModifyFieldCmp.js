import React from "react";
import styled from "styled-components";
import ButtonCmp from "../../../component/ButtonCmp";
import colors from "../../../style/colors";
import useGetRequest from "../../../service/useGetRequest";
import SelectCmp from "../../../component/SelectCmp";
import useAxiosService from "../../../service/useAxiosService";
import {StatementContext} from "../../../App";

const ElementModifyFieldCmp = ({
                                   label,
                                   element,
                                   reload,
                                   closeModalWindow,
                                   sourceEndpoint,
                                   targetEndpoint,
                                   fieldName
                               }) => {
    const {showInfo} = React.useContext(StatementContext);
    const axiosService = useAxiosService();
    const {result: dataOptions} = useGetRequest(sourceEndpoint);
    const [dataId, setDataId] = React.useState(0);

    React.useEffect(() => {
        const result = dataOptions.find((e) => e.name === element[fieldName]);
        if (result)
            setDataId(result.id);
    }, [dataOptions, element, fieldName]);

    function generateSelectOptions() {
        return dataOptions.map((data) => {
            return {text: data.name, value: data.id}
        })
    }

    function fieldUpdated() {
        showInfo(`${label} został zaktualizowany`);
        closeModalWindow()
        reload();
    }

    function updateFieldButtonOnClick() {
        let requestBody = {};
        requestBody["elementId"] = element.id;
        requestBody[`${fieldName}Id`] = dataId;
        axiosService.patch(targetEndpoint, requestBody, fieldUpdated);
    }

    return <Container>
        <SelectCmp title={label} value={dataId} setValue={setDataId} options={generateSelectOptions()}/>
        <ButtonCmp title="Zapisz" color={colors.success} onClick={updateFieldButtonOnClick}/>
    </Container>
}

const Container = styled.div`
`;

export default ElementModifyFieldCmp;