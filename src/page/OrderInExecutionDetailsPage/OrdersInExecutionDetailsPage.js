import React from "react";
import PageCmp from "../../component/PageCmp";
import {useLocation} from "react-router-dom";
import useGetRequest from "../../service/useGetRequest";
import OrderInfoCmp from "../OrderDetailsPage/component/OrderInfoCmp";
import PositionsListCmp from "../OrderDetailsPage/component/PositionsListCmp";
import useModalWindow from "../../service/useModalWindow";
import PositionInExecutionDetailCmp from "./component/PositionInExecutionDetailCmp";
import OrderInExecutionSetInternalId from "./component/OrderInExecutionSetInternalId";
import OrderCloseOrder from "./component/OrderCloseOrderCmp";

const OrdersInExecutionDetailsPage = () => {
    const positionModalWindowHandler = useModalWindow();
    const {state: orderInfo} = useLocation();
    const {result: order, reload} = useGetRequest(`/api/orders/${orderInfo.id}`, true);
    const [selectedPosition, setSelectedPosition] = React.useState();

    const positionRowOnClick = (position) => {
        setSelectedPosition(position);
        positionModalWindowHandler.showModalWindow();
    };

    return <PageCmp title={`Realizacja zamówienia ${orderInfo.name}`}>
        {order && <>
            <OrderInfoCmp order={order}/>
            <OrderInExecutionSetInternalId order={order} reload={reload} />
            <OrderCloseOrder order={order} />
            <PositionsListCmp order={order} rowOnClick={positionRowOnClick}/>
            {selectedPosition &&
                <PositionInExecutionDetailCmp position={selectedPosition}
                                              orderId={order.id}
                                              modalWindowHandler={positionModalWindowHandler}
                                              reload={reload}
                />
            }
        </>}
    </PageCmp>
}

export default OrdersInExecutionDetailsPage;