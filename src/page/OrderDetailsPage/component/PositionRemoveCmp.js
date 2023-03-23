import React from "react";
import ButtonCmp from "../../../component/ButtonCmp";
import colors from "../../../style/colors";
import useAxiosService from "../../../service/useAxiosService";
import {StatementContext} from "../../../App";

const PositionRemoveCmp = ({position, reload, closeModal, orderId}) => {
    const axiosService = useAxiosService();
    const {showInfo} = React.useContext(StatementContext);
    const positionRemoved = () => {
        showInfo(`Usunięto pozycję ${position.name}`);
        reload();
        closeModal();
    }
    const removePositionRequest = () => {
        const params = {orderId: orderId, positionId: position.id};
        axiosService.delete("/api/orders/position", positionRemoved, params);
    }
    return <ButtonCmp title="Usuń pozycję" color={colors.danger} onClick={removePositionRequest}/>
}

export default PositionRemoveCmp;