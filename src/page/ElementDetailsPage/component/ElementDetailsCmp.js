import InfoCmp from "../../../component/InfoCmp";
import dateFormatter from "../../../service/dateFormatter";
import colors from "../../../style/colors";
import {Link} from "react-router-dom";

const ElementDetailsCmp = ({element}) => {
    const elementData = [
        {label: "Id", value: element.id},
        {label: "Nazwa", value: element.name},
        {label: "Opis", value: element.description},
        {label: "Nr.seryjny", value: element.serialNumber},
        {
            label: "Link",
            value: <Link style={{color: colors.primary}} to={{pathname: element.url}} target="_blank">Klik</Link>
        },
        {label: "Producent", value: element.producer},
        {label: "Kategoria", value: element.category},
        {label: "Dostawca", value: element.provider},
        {label: "Utworzony przez", value: element.createdBy},
        {label: "Data utworzenia", value: dateFormatter.toFormattedDate(element.createdAt)},
        {label: "Zmodyfikowany przez", value: element.modifiedBy},
        {label: "Data modyfikacji", value: dateFormatter.toFormattedDate(element.updatedAt)},
    ]
    return <InfoCmp title="Szczegóły elementu" data={elementData}/>
}

export default ElementDetailsCmp;