import InfoCmp from "../../../component/InfoCmp";
import dateFormatter from "../../../service/dateFormatter";

const ElementDetails = ({element}) => {
    const elementData = [
        {label: "id", value: element.id},
        {label: "Data utworzenia", value: dateFormatter.toFormattedDate(element.createdAt)},
        {label: "Data modyfikacji", value: dateFormatter.toFormattedDate(element.updatedAt)}
    ]
    return <InfoCmp title="Szczegóły elementu" data={elementData}/>
}

export default ElementDetails;