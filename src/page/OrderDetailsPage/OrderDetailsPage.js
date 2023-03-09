import PageCmp from "../../component/PageCmp";
import {useLocation} from "react-router-dom";

const OrderDetailsPage = () => {
    const {state: orderData} = useLocation();
    return <PageCmp title={`Szczegóły zamówenia ${orderData.name}`}></PageCmp>
}

export default OrderDetailsPage;