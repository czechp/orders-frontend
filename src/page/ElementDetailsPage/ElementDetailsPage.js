import React from "react";
import PageCmp from "../../component/PageCmp";
import {useLocation} from "react-router-dom";
import useAxiosService from "../../service/useAxiosService";
import LoadingWrapper from "../../component/LoadingWrapper";
import ElementDetailsCmp from "./component/ElementDetailsCmp";
import ElementModifyCmp from "./component/ElementModifyCmp";
import useGetRequest from "../../service/useGetRequest";

const ElementDetailsPage = () => {
    const {state: elementData} = useLocation();
    const axiosService = useAxiosService();
    const {result:element} = useGetRequest(`/api/elements/${elementData.id}`, true);

    return <PageCmp title="Szczegóły elementu">
        <LoadingWrapper loaded={element}>
            {element && <>
                <ElementDetailsCmp element={element} />
                <ElementModifyCmp element={element} />
            </>}
        </LoadingWrapper>
    </PageCmp>
}

export default ElementDetailsPage;