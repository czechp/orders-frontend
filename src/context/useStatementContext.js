import React from "react"

const useStatementContext = () => {
    const [statement, setStatement] = React.useState("");
    const [isError, setIsError] = React.useState(false);

    function showInfo(text, error = false) {
        setStatement(text);
        setIsError(error);
        console.log(text);
        console.log(isError);
    }

    return {statement, isError, showInfo};
}

export default useStatementContext;