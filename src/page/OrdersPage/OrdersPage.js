import PageCmp from "../../component/PageCmp";
import OrdersList from "./component/OrdersList";
import {useNavigate} from "react-router-dom";

const OrdersPage = () => {
    const navigate = useNavigate();

    function navigateToDetails(order) {
        navigate("/order-details", {state: {id: order.id, name: order.name}});
    }

    return <PageCmp title="Wszystkie zamówienia">
        <OrdersList rowOnClick={navigateToDetails} state="PREPARATION" title="W przygotowaniu"/>
        <OrdersList rowOnClick={navigateToDetails} state="EXECUTION" title="W realizacji"/>
        <OrdersList rowOnClick={navigateToDetails} state="CLOSED" title="Zamknięte"/>
    </PageCmp>
}

export default OrdersPage;