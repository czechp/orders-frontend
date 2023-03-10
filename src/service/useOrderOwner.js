import useAuthenticationService from "./useAuthenticationService";

const useOrderOwner = (order) => {
    const {login} = useAuthenticationService().getUserInfo();
    return (order?.owner || false) === login;
}

export default useOrderOwner;