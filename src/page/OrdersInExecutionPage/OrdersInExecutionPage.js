import PageCmp from "../../component/PageCmp";
import OrdersList from "../OrdersPage/component/OrdersList";
import {useNavigate} from "react-router-dom";

const OrdersInExecutionPage = () => {
    const navigate = useNavigate();
    const navigateToDetails = (order) => {
        navigate("/orders-in-execution-details", {state: {id: order.id, name: order.name}});
    };

    return <PageCmp title="Zamówienia do realizacji">
        <OrdersList url="/api/orders" state="EXECUTION" reload={() => {
        }} rowOnClick={navigateToDetails}/>
    </PageCmp>
}

export default OrdersInExecutionPage;