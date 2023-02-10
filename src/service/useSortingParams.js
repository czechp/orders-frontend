import React from "react";

const useSortingParams = () => {
    const [sortingDirection, setSortingDirection] = React.useState(false);

    function generateSortingParams(fieldName) {
        const direction = sortingDirection ? "ASC" : "DESC";
        setSortingDirection((prevState) => !prevState);
        return {sort: `${fieldName},${direction}`};
    }

    return generateSortingParams;
}

export default useSortingParams;