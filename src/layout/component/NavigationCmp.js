import {useNavigate} from "react-router-dom";

import styled from "styled-components";
import colors from "../../style/colors";

const NavigationCmp = () => {
    const navigate = useNavigate();

    return <Container>
        <NavigationSection title="Home">
            <NavigationButton onClick={()=>navigate("/")}>Home</NavigationButton>
            <NavigationButton onClick={()=>navigate("/login")}>Logowanie</NavigationButton>
            <NavigationButton onClick={()=>navigate("/register")}>Rejestracja</NavigationButton>
            <NavigationButton onClick={()=>navigate("/user-confirm")}>Aktywuj konto</NavigationButton>
            <NavigationButton onClick={()=>navigate("/restore-password")}>Odzyskaj hasło</NavigationButton>
            <NavigationButton onClick={()=>navigate("/users")}>Zarządzaj użytkownikami</NavigationButton>

        </NavigationSection>
        <NavigationSection title="Zamówienia - wszystkie">
            <NavigationButton onClick={()=>navigate("/orders")}>Zamówienia</NavigationButton>
        </NavigationSection>
        <NavigationSection title="Zamówienia - Twoje">
            <NavigationButton onClick={()=>navigate("/user-orders")}>Zamówienia</NavigationButton>
        </NavigationSection>
        <NavigationSection title="Elementy">
            <NavigationButton onClick={()=>navigate("/elements")}>Elementy</NavigationButton>
            <NavigationButton onClick={()=>navigate("/producers")}>Producenci</NavigationButton>
            <NavigationButton onClick={()=>navigate("/categories")}>Kategorie</NavigationButton>
            <NavigationButton onClick={()=>navigate("/providers")}>Dostawcy</NavigationButton>
        </NavigationSection>
        <NavigationSection title="Realizuj">
            <NavigationButton>Zamówienia</NavigationButton>
        </NavigationSection>
    </Container>
}

const NavigationSection = ({title, children}) => {
    return <NavigationSectionContainer>
        <NavigationSectionTitle>{title}</NavigationSectionTitle>
        {children}
    </NavigationSectionContainer>
}
const Container = styled.div`
  width: 100%;
`;

const NavigationSectionContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const NavigationSectionTitle = styled.h2`
  margin-top: 3rem;
  font-style: italic;
`
const NavigationButton = styled.button`
  background-color: transparent;
  border: none;
  border-bottom: .5px solid;
  border-top: .5px solid;
  color: ${colors.main};
  display: flex;
  justify-content: center;
  padding: .7rem;
  cursor: pointer;
  font-size: larger;
  &:hover{
    background-color: ${colors.main};
    color: ${colors.background}
  }
`;
export default NavigationCmp;