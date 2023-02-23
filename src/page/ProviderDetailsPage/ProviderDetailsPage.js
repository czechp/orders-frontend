import React from "react";
import PageCmp from "../../component/PageCmp";
import {useLocation} from "react-router-dom";
import useAxiosService from "../../service/useAxiosService";
import LoadingWrapper from "../../component/LoadingWrapper";
import ProviderDetailsCmp from "./component/ProviderDetailsCmp";

const ProviderDetailsPage = () => {
    const {state: providerData} = useLocation();
    const axiosService = useAxiosService();
    const [provider, setProvider] = React.useState();
    const getProviderCallback = React.useCallback(() => {
        axiosService.get(`/api/providers/${providerData.id}`, (response) => setProvider(response.data));
    }, [axiosService]);

    React.useEffect(() => {
        getProviderCallback();
    }, [getProviderCallback]);
    return <PageCmp title={`Szczegóły dostawcy - ${providerData.name}`}>
        <LoadingWrapper loaded={provider}>
            {provider && <>
                <ProviderDetailsCmp provider={provider} />
            </>}
        </LoadingWrapper>
    </PageCmp>
}

export default ProviderDetailsPage;