import React from "react";
import PageCmp from "../../component/PageCmp";
import OrdersList from "./component/OrdersList";
import {useNavigate} from "react-router-dom";
import OrderCreateCmp from "./component/OrderCreateCmp";

const OrdersPage = () => {
    const navigate = useNavigate();
    const [reload, setReload] = React.useState(false);

    function reloadPage() {
        setReload((prev) => !prev);
    }

    function navigateToDetails(order) {
        navigate("/order-details", {state: {id: order.id, name: order.name}});
    }

    return <PageCmp title="Wszystkie zamówienia">
        <OrderCreateCmp reload={reloadPage}/>
        <OrdersList url={"/api/orders"} reload={reload} rowOnClick={navigateToDetails} state="PREPARATION" title="W przygotowaniu"/>
        <OrdersList url={"/api/orders"} reload={reload} rowOnClick={navigateToDetails} state="EXECUTION" title="W realizacji"/>
        <OrdersList url={"/api/orders"} reload={reload} rowOnClick={navigateToDetails} state="CLOSED" title="Zamknięte"/>
    </PageCmp>
}

export default OrdersPage;