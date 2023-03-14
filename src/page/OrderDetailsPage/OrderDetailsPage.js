import React from "react";
import PageCmp from "../../component/PageCmp";
import {useLocation} from "react-router-dom";
import useGetRequest from "../../service/useGetRequest";
import LoadingWrapper from "../../component/LoadingWrapper";
import OrderInfoCmp from "./component/OrderInfoCmp";
import OrderModifyInfoCmp from "./component/OrderModifyInfoCmp";
import PositionsListCmp from "./component/PositionsListCmp";
import PositionDetailsCmp from "./component/PositionDetailsCmp";
import useModalWindow from "../../service/useModalWindow";

const OrderDetailsPage = () => {
    const {state: orderData} = useLocation();
    const {result: order, reload} = useGetRequest(`/api/orders/${orderData.id}`, true);
    const detailsModalHandler = useModalWindow();
    const [selectedPosition, setSelectedPosition] = React.useState();

    const selectPosition = (position) => {
        setSelectedPosition(position);
        detailsModalHandler.showModalWindow();
    }
    return <PageCmp title={`Szczegóły zamówenia - ${orderData.name}`}>
        <LoadingWrapper loaded={order}>
            {order && <>
                <OrderInfoCmp order={order}/>
                <OrderModifyInfoCmp order={order} reload={reload}/>
                <PositionsListCmp order={order} rowOnClick={selectPosition}/>
                <PositionDetailsCmp modalWindowHandler={detailsModalHandler} position={selectedPosition}/>
            </>}
        </LoadingWrapper>
    </PageCmp>
}

export default OrderDetailsPage;