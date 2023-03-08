import PageCmp from "../../component/PageCmp";
import OrdersList from "./component/OrdersList";

const OrdersPage = () => {
    return <PageCmp title="Wszystkie zamówienia">
        <OrdersList state="PREPARATION" title="W przygotowaniu" />
        <OrdersList state="EXECUTION" title="W realizacji" />
        <OrdersList state="CLOSED" title="Zamknięte" />
    </PageCmp>
}

export default OrdersPage;