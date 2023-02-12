import React from "react";
import styled from "styled-components";
import colors from "../../style/colors";
import {AuthenticationContext} from "../../App";
import useAuthenticationService from "../../service/useAuthenticationService";
import ButtonCmp from "../../component/ButtonCmp";
import {useNavigate} from "react-router-dom";

const TopBar = () => {
    return <Container>
        <TitleContainer>
            <Title>Zamówienia automatycy</Title>
            <Subtitle>Created by PCzech</Subtitle>
        </TitleContainer>
        <LoginSection/>
    </Container>
}

const LoginSection = () => {
    const {logged} = React.useContext(AuthenticationContext);
    const navigate = useNavigate();
    return <LoginSectionContainer>
        {logged ? <UserInfo/> : <LoginPageLink onClick={() => navigate("/login")}>Zaloguj</LoginPageLink>}
    </LoginSectionContainer>
}

const UserInfo = ()=> {
    const {getUserInfo, logout} = useAuthenticationService();
    const {login, email} = getUserInfo();

    return <UserInfoContainer>
        <UserInfoRow>{login}</UserInfoRow>
        <UserInfoRow>{email}</UserInfoRow>
        <ButtonCmp title="Wyloguj" style={{fontSize: "smaller", marginBottom: 0}} onClick={logout}/>
    </UserInfoContainer>
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: ${colors.background};

`;

const TitleContainer = styled.div``;
const Title = styled.h1`
  margin-bottom: 0;
`;
const Subtitle = styled.h2`
  margin-top: 0;
  font-style: italic;
`;
const LoginSectionContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`;
const LoginPageLink = styled.div`
  font-size: 1.5rem;
  font-style: italic;
  cursor: pointer;
`;
const UserInfoContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: smaller;
`;
const UserInfoRow = styled.p`
  margin: 0 0 .5rem 0;
  width: 100%;
`;
export default TopBar;