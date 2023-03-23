import InfoCmp from "../../../component/InfoCmp";
import dateFormatter from "../../../service/dateFormatter";

const ProviderDetailsCmp = ({provider}) => {
    const providerData = [
        {label: "Id", value: provider.id},
        {label: "Nazwa", value: provider.name},
        {label: "Data stworzenia", value: dateFormatter.toFormattedDate(provider.createdAt)},
        {label: "Data modyfikacji", value: dateFormatter.toFormattedDate(provider.updateAt)},
    ];
    return <InfoCmp title="Szczegóły dostawcy" data={providerData}/>
}

export default ProviderDetailsCmp;

