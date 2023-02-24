import React from "react";
import PageCmp from "../../component/PageCmp";
import {useLocation} from "react-router-dom";
import useAxiosService from "../../service/useAxiosService";
import LoadingWrapper from "../../component/LoadingWrapper";
import CategoryDetailsCmp from "./component/CategoryDetailsCmp";
import CategoryRemoveCmp from "./component/CategoryRemoveCmp";
import CategoryUpdateCmp from "./component/CategoryUpdateCmp";

const CategoryDetailsPage = () => {
    const {state: categoryData} = useLocation();
    const axiosService = useAxiosService();
    const [category, setCategory] = React.useState();
    const getCategoryCallback = React.useCallback(() => {
        axiosService.get(`/api/categories/${categoryData.id}`, (response) => setCategory(response.data));
    }, [axiosService, categoryData]);

    React.useEffect(() => {
        getCategoryCallback();
    }, [getCategoryCallback]);
    return <PageCmp title={`Szczegóły kategorii - ${categoryData.name}`}>
        <LoadingWrapper loaded={category}>
            {category && <>
                <CategoryDetailsCmp provider={category} />
                <CategoryUpdateCmp category={category} reload={getCategoryCallback} />
                <CategoryRemoveCmp category={category} />
            </>}
        </LoadingWrapper>
    </PageCmp>
}

export default CategoryDetailsPage;