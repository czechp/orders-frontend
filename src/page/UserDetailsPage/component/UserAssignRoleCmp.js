import React from "react";
import FormCmp from "../../../component/FormCmp";
import ButtonCmp from "../../../component/ButtonCmp";
import useModalWindow from "../../../service/useModalWindow";
import ModalWindowCmp from "../../../component/ModalWindowCmp";
import SelectCmp from "../../../component/SelectCmp";
import userRoles from "../../../constant/userRoles";
import colors from "../../../style/colors";
import useAxiosService from "../../../service/useAxiosService";
import {StatementContext} from "../../../App";

const UserAssignRoleCmp = ({
                               user, reloadUser = () => {
    }
                           }) => {
    const {showInfo} = React.useContext(StatementContext);
    const axiosService = useAxiosService();
    const modalWindowsHandler = useModalWindow();
    const [userRole, setUserRole] = React.useState(user.userRole);

    const roleAssigned = () => {
        showInfo(`Użytkownik ${user.username} ma teraz role ${userRole}`);
        reloadUser();
    };
    const assignRoleRequest = () => {
        axiosService.patch(`/api/users/assign-role/${user.id}`,
            {},
            roleAssigned,
            {role: userRole}
        )
    };
    const assignRoleBtnOnClick = () => {
        modalWindowsHandler.hideModalWindow();
        assignRoleRequest();
    };
    return <FormCmp>
        <ButtonCmp title="Zmień role użytkownika" onClick={modalWindowsHandler.showModalWindow}/>
        <ModalWindowCmp modalHandler={modalWindowsHandler} title={`Zmień role użytkownika - ${user.username}`}>
            <SelectCmp value={userRole} setValue={setUserRole} options={userRoles}/>
            <ButtonCmp title="Zapisz" color={colors.success} onClick={assignRoleBtnOnClick}/>
        </ModalWindowCmp>
    </FormCmp>
}

export default UserAssignRoleCmp;