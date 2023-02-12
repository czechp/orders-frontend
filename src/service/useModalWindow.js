import React from "react";

const UseModalWindow = (initState=false) => {
    const [visibility, setVisibility] = React.useState(initState);

    return {
        visibility,
        showModalWindow: ()=>setVisibility(true),
        hideModalWindow: ()=>setVisibility(false)
    }
}

export default UseModalWindow;