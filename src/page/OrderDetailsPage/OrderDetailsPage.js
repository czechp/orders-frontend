import PageCmp from "../../component/PageCmp";
import {useLocation} from "react-router-dom";
import useGetRequest from "../../service/useGetRequest";
import LoadingWrapper from "../../component/LoadingWrapper";
import OrderInfoCmp from "./component/OrderInfoCmp";

const OrderDetailsPage = () => {
    const {state: orderData} = useLocation();
    const {result: order} = useGetRequest(`/api/orders/${orderData.id}`, true);
    return <PageCmp title={`Szczegóły zamówenia - ${orderData.name}`}>
        <LoadingWrapper loaded={order}>
            {order && <>
                <OrderInfoCmp order={order}/>
            </>}
        </LoadingWrapper>
    </PageCmp>
}

export default OrderDetailsPage;