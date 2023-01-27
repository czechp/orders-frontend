import styled from "styled-components";
import colors from "../../style/colors";

const NavigationCmp = () => {
    return <Container>
        <NavigationSection title="Zamówienia - wszystkie">
            <NavigationButton>Oczekujące</NavigationButton>
            <NavigationButton>W realizacji</NavigationButton>
            <NavigationButton>Zamknięte</NavigationButton>
        </NavigationSection>
        <NavigationSection title="Zamówienia - Twoje">
            <NavigationButton>Oczekujące</NavigationButton>
            <NavigationButton>W realizacji</NavigationButton>
            <NavigationButton>Zamknięte</NavigationButton>
        </NavigationSection>
        <NavigationSection title="Elementy">
            <NavigationButton>Elementy</NavigationButton>
            <NavigationButton>Producenci</NavigationButton>
            <NavigationButton>Kategorie</NavigationButton>
            <NavigationButton>Dostawcy</NavigationButton>
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