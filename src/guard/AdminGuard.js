import useAuthenticationService from "../service/useAuthenticationService";
import LoginGuard from "./LoginGuard";
import {Navigate} from "react-router-dom";

const AdminGuard = ({children}) => {
    const authenticationService = useAuthenticationService();
    const {role} = authenticationService.getUserInfo();
    return role === "ADMIN" ? <LoginGuard>{children}</LoginGuard> : <Navigate to={"/forbidden"} />
}

export default AdminGuard;