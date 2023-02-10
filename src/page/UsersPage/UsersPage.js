import React from "react";
import PageCmp from "../../component/PageCmp";
import UsersList from "./component/UsersList";

const UsersPage = () => {

    return <PageCmp title={"Konta użytkowników"}>
        <UsersList/>
    </PageCmp>
}

export default UsersPage;