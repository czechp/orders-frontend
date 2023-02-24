import React from "react";
import PageCmp from "../../component/PageCmp";
import CategoriesListCmp from "./component/CategoriesListCmp";
import CategoryCreateCmp from "./component/CategoryCreateCmp";

const CategoriesPage = () => {
    // eslint-disable-next-line no-unused-vars
    const [reload, setReload] = React.useState(false);
    const reloadPage = () => setReload((prevState) => !prevState);

    return <PageCmp title="Kategorie">
        <CategoryCreateCmp reload={reloadPage}/>
        <CategoriesListCmp reload={reloadPage}/>
    </PageCmp>
}

export default CategoriesPage;