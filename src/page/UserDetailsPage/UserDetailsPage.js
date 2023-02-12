import React from "react";
import PageCmp from "../../component/PageCmp";
import {useLocation} from "react-router-dom";
import LoadingWrapper from "../../component/LoadingWrapper";
import useAxiosService from "../../service/useAxiosService";
import InfoCmp from "../../component/InfoCmp";
import dateFormatter from "../../service/dateFormatter";
import UserRemoveCmp from "./component/UserRemoveCmp";

const UserDetailsPage = () => {
    const {state: userData} = useLocation();
    const axiosService = useAxiosService();
    const [user, setUser] = React.useState(null);
    const [userInfo, setUserInfo] = React.useState([]);

    const getUserCallback = React.useCallback(() => {
        axiosService.get(`/api/users/${userData.userId}`, (response) => {
            setUser(response.data);
        });
    }, [axiosService, userData.userId]);

    React.useEffect(() => {
        getUserCallback();
    }, [getUserCallback])

    React.useEffect(() => {
        if (user) {
            setUserInfo([
                //TODO: add info about user activation
                {label: "Login", value: user.username},
                {label: "Email", value: user.email},
                {label: "Rola", value: user.userRole},
                {label: "Potwierdzenie adresu email", value: user.confirmed ? "TAK":"NIE"},
                {label: "Data utowrzenia",  value: dateFormatter.toFormattedDate(user.createdAt)}
            ]);
        }
    }, [user]);

    return <PageCmp title={`Szczegóły użytkownika - ${userData.username}`}>
        <LoadingWrapper loaded={user}>
            <InfoCmp title="Informacje o użytkowniku" data={userInfo}/>
            <UserRemoveCmp user={user} />
        </LoadingWrapper>
    </PageCmp>
}

export default UserDetailsPage;