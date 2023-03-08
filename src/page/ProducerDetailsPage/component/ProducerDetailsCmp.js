import InfoCmp from "../../../component/InfoCmp";
import dateFormatter from "../../../service/dateFormatter";

const ProducerDetailsCmp = ({producer}) => {
    const categoryData = [
        {label: "Id", value: producer.id},
        {label: "Nazwa", value: producer.name},
        {label: "Data stworzenia", value: dateFormatter.toFormattedDate(producer.createdAt)},
        {label: "Data modyfikacji", value: dateFormatter.toFormattedDate(producer.updateAt)},
    ];
    return <InfoCmp title="Szczegóły producenta" data={categoryData}/>
}

export default ProducerDetailsCmp;

