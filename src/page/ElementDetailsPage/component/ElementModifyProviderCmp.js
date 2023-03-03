import React from "react";
import styled from "styled-components";
import ButtonCmp from "../../../component/ButtonCmp";
import colors from "../../../style/colors";
import useGetRequest from "../../../service/useGetRequest";
import SelectCmp from "../../../component/SelectCmp";
import useAxiosService from "../../../service/useAxiosService";
import {StatementContext} from "../../../App";

const ElementModifyProviderCmp = ({element, reload, closeModalWindow}) => {
    const {showInfo} = React.useContext(StatementContext);
    const axiosService = useAxiosService();
    const {result: providers} = useGetRequest("/api/providers");
    const [providerId, setProviderId] = React.useState(element.id);

    function generateSelectOptions() {
        return providers.map((provider) => {
            return {text: provider.name, value: provider.id}
        })
    }

    function providerUpdated() {
        showInfo("Dostawca została zaktualizowany");
        closeModalWindow()
        reload();
    }

    function updateProviderBtnOnClick() {
        const requestBody = {elementId: element.id, providerId};
        axiosService.patch("/api/elements/provider", requestBody, providerUpdated);
    }

    return <Container>
        <SelectCmp title="Dostawca" value={providerId} setValue={setProviderId} options={generateSelectOptions()}/>
        <ButtonCmp title="Zapisz dostawce" color={colors.success} onClick={updateProviderBtnOnClick}/>
    </Container>
}

const Container = styled.div`
`;

export default ElementModifyProviderCmp;