import React from "react";

const httpErrorHandler = (error, showErrorInfo) => {
     console.log(error)
     const message = error.response.data.message || "Nieznany błąd";
     showErrorInfo(message, true);
}

export default httpErrorHandler;
