import PageCmp from "../../component/PageCmp";
import OrderedPositionsCmp from "./component/OrderedPositionsCmp";

const OrderedPositionsPage = ()=>{
    return <PageCmp title="Zamówione elementy">
            <OrderedPositionsCmp />
    </PageCmp>
}

export  default OrderedPositionsPage;