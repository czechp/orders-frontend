import InfoCmp from "../../../component/InfoCmp";
import dateFormatter from "../../../service/dateFormatter";
import {orderStateTranslator} from "../../../service/translator/orderStateTranslator";

const OrderInfoCmp = ({order}) => {
    const orderData = [
        {label: "Id", value: order.id},
        {label: "Właściciel", value: order.owner},
        {label: "Nazwa", value: order.name},
        {label: "Opis", value: order.description},
        {label: "Nr. zamówienia", value: order.internalId},
        {label: "Stan", value: orderStateTranslator.from(order.orderState)},
        {label: "Data utworzenia", value: dateFormatter.toFormattedDate(order.createAt)},
        {label: "Data wystawienia do realizacji", value: order.executionDate ? dateFormatter.toFormattedDate(order.executionDate) : "Brak" },
        {label: "Data zamknięcia", value: order.closingDate ? dateFormatter.toFormattedDate(order.closingDate) : "Brak" },
    ];
    return <InfoCmp title="Szczegóły zamówienia" data={orderData}/>
}
export default OrderInfoCmp;