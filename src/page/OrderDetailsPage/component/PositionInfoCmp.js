import InfoCmp from "../../../component/InfoCmp";
import dateFormatter from "../../../service/dateFormatter";
import positionUnitTranslator from "../../../service/translator/positionUnitTranslator";

const PositionInfoCmp = ({position}) => {
    const positionInfo = [
        {label: "Id", value: position.id},
        {label: "Nazwa", value: position.name},
        {label: "Opis", value: position.description},
        {label: "Data utworzenia", value: dateFormatter.toFormattedDate(position.createdAt)},
        {label: "Data zamówienia", value: position.orderingDate ? dateFormatter.toFormattedDate(position.orderingDate): "Brak"},
        {label: "Data dostarczenia", value: position.DeliveringDate ? dateFormatter.toFormattedDate(position.deliveringDate): "Brak"},
        {label: "Ilość", value: position.quantity},
        {label: "Jednostka", value: positionUnitTranslator.fromUnit(position.positionUnit)},
    ];
    return <InfoCmp data={positionInfo} title="Szczegóły pozycji"/>
}

export default PositionInfoCmp;