import InfoCmp from "../../../component/InfoCmp";
import dateFormatter from "../../../service/dateFormatter";

const CategoryDetailsCmp = ({provider: category}) => {
    const categoryData = [
        {label: "Id", value: category.id},
        {label: "Nazwa", value: category.name},
        {label: "Data stworzenia", value: dateFormatter.toFormattedDate(category.createdAt)},
        {label: "Data modyfikacji", value: dateFormatter.toFormattedDate(category.updateAt)},
    ];
    return <InfoCmp title="Szczegóły kategorii" data={categoryData}/>
}

export default CategoryDetailsCmp;

