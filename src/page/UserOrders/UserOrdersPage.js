import PageCmp from "../../component/PageCmp";
import OrdersList from "../OrdersPage/component/OrdersList";
import React from "react";
import {useNavigate} from "react-router-dom";

const UserOrdersPage = () => {
    const navigate = useNavigate();
    function navigateToDetails(order) {
        navigate("/order-details", {state: {id: order.id, name: order.name}});
    }
    return <PageCmp title="Twoje zamowienia">
        <OrdersList url={"/api/orders/user"} rowOnClick={navigateToDetails} reload={()=>{}} state="PREPARATION" title="W przygotowaniu"/>
        <OrdersList url={"/api/orders/user"} rowOnClick={navigateToDetails} reload={()=>{}} state="EXECUTION" title="W realizacji"/>
        <OrdersList url={"/api/orders/user"} rowOnClick={navigateToDetails} reload={()=>{}} state="CLOSED" title="Zamknięte"/>
    </PageCmp>
}

export default UserOrdersPage;