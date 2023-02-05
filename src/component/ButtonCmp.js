import styled from "styled-components";
import colors from "../style/colors";

const ButtonCmp = ({title, color = colors.primary, onClick}) => {
    function onClickInternal(event){
        event.preventDefault();
        onClick();
    }
    return <Button color={color} onClick={onClickInternal}>{title}</Button>;
}

const Button = styled.button`
  width: 100%;
  padding: .5rem;
  border: 2px solid ${props => props.color};
  color: ${props => props.color};
  background-color: transparent;
  border-radius: 1rem;
  font-size: larger;

  &:hover {
    cursor: pointer;
    background-color: ${props => props.color};
    color: ${colors.main}
  }
`;
export default ButtonCmp;