import React from "react";
import PageCmp from "../../component/PageCmp";
import {useLocation} from "react-router-dom";
import useAxiosService from "../../service/useAxiosService";
import LoadingWrapper from "../../component/LoadingWrapper";
import ElementDetailsCmp from "./component/ElementDetailsCmp";

const ElementDetailsPage = () => {
    const {state: elementData} = useLocation();
    const axiosService = useAxiosService();
    const [element, setElement] = React.useState();

    const getElementRequest = React.useCallback(() => {
        axiosService.get(`/api/elements/${elementData.id}`, (response) => setElement(response.data))
    }, [axiosService, elementData]);

    React.useEffect(() => {
        getElementRequest();
    }, [getElementRequest])
    return <PageCmp title="Szczegóły elementu">
        <LoadingWrapper loaded={element}>
            {element && <>
                <ElementDetailsCmp element={element} />
            </>}
        </LoadingWrapper>
    </PageCmp>
}

export default ElementDetailsPage;