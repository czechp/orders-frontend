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
import OrderAddPositionCmp from "./component/OrderAddPositionCmp";
import useOrderOwner from "../../service/useOrderOwner";
import OrderReleaseToExecutionCmp from "./component/OrderReleaseToExecutionCmp";

const OrderDetailsPage = () => {
    const {state: orderData} = useLocation();
    const {result: order, reload} = useGetRequest(`/api/orders/${orderData.id}`, true);
    const detailsModalHandler = useModalWindow();
    const [selectedPosition, setSelectedPosition] = React.useState();
    const userIsOrderOwner = useOrderOwner(order);
    const allowedActivity = order?.orderState === "PREPARATION" && userIsOrderOwner;
    const selectPosition = (position) => {
        setSelectedPosition(position);
        detailsModalHandler.showModalWindow();
    }
    return <PageCmp title={`Szczegóły zamówenia - ${orderData.name}`}>
        <LoadingWrapper loaded={order}>
            {order && <>
                <OrderInfoCmp order={order}/>
                <OrderModifyInfoCmp order={order} reload={reload}/>
                {allowedActivity && <OrderReleaseToExecutionCmp orderId={order.id} />}
                <PositionsListCmp order={order} rowOnClick={selectPosition}/>
                <PositionDetailsCmp modalWindowHandler={detailsModalHandler} position={selectedPosition} orderId={order.id} reload={reload}/>
                {allowedActivity && <OrderAddPositionCmp order={order} reload={reload} />}
            </>}
        </LoadingWrapper>
    </PageCmp>
}

export default OrderDetailsPage;