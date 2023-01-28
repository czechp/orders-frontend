import styled from "styled-components";
import colors from "../../style/colors";

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
    //Todo: make logic here after login service implementing
    const logged = false;
    return <LoginSectionContainer>
        {logged ? <UserInfo/> : <LoginPageLink>Zaloguj</LoginPageLink>}
    </LoginSectionContainer>
}

const UserInfo = ()=>{
    //Todo: get info from login service
    const login = "Some user";
    const email = "someEmail@gmail.com";
    return <UserInfoContainer>
        <UserInfoRow>Login: {login}</UserInfoRow>
        <UserInfoRow>Email: {email}</UserInfoRow>
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
  margin-bottom: 0px;
`;
const Subtitle = styled.h2`
  margin-top: 0px;
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
    align-items: start;
    justify-content: center;
`;
const UserInfoRow = styled.span`
    margin-bottom: 0.5rem;
`;
export default TopBar;