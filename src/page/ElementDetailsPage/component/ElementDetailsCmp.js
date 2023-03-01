import InfoCmp from "../../../component/InfoCmp";
import dateFormatter from "../../../service/dateFormatter";
import colors from "../../../style/colors";
import {Link} from "react-router-dom";

const ElementDetailsCmp = ({element}) => {
    const elementData = [
        {label: "id", value: element.id},
        {label: "Nazwa", value: element.name},
        {label: "Opis", value: element.description},
        {label: "Nr.seryjny", value: element.serialNumber},
        {label: "Link", value:<Link style={{color: colors.primary}} to={{ pathname: element.url }} target="_blank">Klik</Link> },
        {label: "Producent", value: element.producer},
        {label: "Kategoria", value: element.category},
        {label: "Dostawca", value: element.provider},
        {label: "Data utworzenia", value: dateFormatter.toFormattedDate(element.createdAt)},
        {label: "Data modyfikacji", value: dateFormatter.toFormattedDate(element.updatedAt)},
    ]
    return <InfoCmp title="Szczegóły elementu" data={elementData}/>
}

export default ElementDetailsCmp;