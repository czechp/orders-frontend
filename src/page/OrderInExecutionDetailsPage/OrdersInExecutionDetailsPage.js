import PageCmp from "../../component/PageCmp";
import {useLocation} from "react-router-dom";

const OrdersInExecutionDetailsPage = () => {
    const {state: orderInfo} = useLocation();
    return <PageCmp title={`Realizacja zamówienia ${orderInfo.name}`}>

    </PageCmp>
}

export default OrdersInExecutionDetailsPage;