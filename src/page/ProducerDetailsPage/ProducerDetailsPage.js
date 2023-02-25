import React from "react";
import PageCmp from "../../component/PageCmp";
import {useLocation} from "react-router-dom";
import useAxiosService from "../../service/useAxiosService";
import LoadingWrapper from "../../component/LoadingWrapper";
import ProducerDetailsCmp from "./component/ProducerDetailsCmp";
import ProducerUpdateCmp from "./component/ProducerUpdateCmp";
import ProducerRemoveCmp from "./component/ProducerRemoveCmp";

const ProducerDetailsPage = () => {
    const {state: producerData} = useLocation();
    const axiosService = useAxiosService();
    const [producer, setProducer] = React.useState();
    const getProducerCallback = React.useCallback(() => {
        axiosService.get(`/api/producers/${producerData.id}`, (response) => setProducer(response.data));
    }, [axiosService, producerData]);

    React.useEffect(() => {
        getProducerCallback();
    }, [getProducerCallback]);
    return <PageCmp title={`Szczegóły producenta - ${producerData.name}`}>
        <LoadingWrapper loaded={producer}>
            {producer && <>
                <ProducerDetailsCmp producer={producer} />
                <ProducerUpdateCmp producer={producer} reload={getProducerCallback} />
                <ProducerRemoveCmp producer={producer} />
            </>}
        </LoadingWrapper>
    </PageCmp>
}

export default ProducerDetailsPage;