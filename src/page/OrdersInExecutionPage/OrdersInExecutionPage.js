import PageCmp from "../../component/PageCmp";
import OrdersList from "../OrdersPage/component/OrdersList";

const OrdersInExecutionPage = () => {
    return <PageCmp title="Zamówienia do realizacji">
        <OrdersList url="/api/orders" state="EXECUTION" reload={()=>{}}/>
    </PageCmp>
}

export default OrdersInExecutionPage;