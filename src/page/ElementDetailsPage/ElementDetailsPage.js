import React from "react";
import PageCmp from "../../component/PageCmp";
import {useLocation} from "react-router-dom";
import useAxiosService from "../../service/useAxiosService";
import LoadingWrapper from "../../component/LoadingWrapper";
import ElementDetailsCmp from "./component/ElementDetailsCmp";
import ElementModifyCmp from "./component/ElementModifyCmp";
import useGetRequest from "../../service/useGetRequest";
import AssociatedElementsCmp from "./component/AssociatedElementsCmp";

const ElementDetailsPage = () => {
    const {state: elementData} = useLocation();
    const axiosService = useAxiosService();
    const {result:element, reload} = useGetRequest(`/api/elements/${elementData.id}`, true);

    return <PageCmp title="Szczegóły elementu">
        <LoadingWrapper loaded={element}>
            {element && <>
                <ElementDetailsCmp element={element} />
                <ElementModifyCmp element={element} reload={reload} />
                <AssociatedElementsCmp element={element} />
            </>}
        </LoadingWrapper>
    </PageCmp>
}

export default ElementDetailsPage;