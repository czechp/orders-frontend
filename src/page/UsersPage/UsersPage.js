import React from "react";
import PageCmp from "../../component/PageCmp";
import UsersList from "./component/UsersList";

const UsersPage = () => {
    const [loaded, setLoaded] = React.useState(false);
    return <PageCmp loaded={loaded} title={"Konta użytkowników"}>
        <UsersList setLoaded={setLoaded}/>
    </PageCmp>
}

export default UsersPage;