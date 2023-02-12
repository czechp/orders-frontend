import styled from "styled-components";
import colors from "../style/colors";

const ButtonCmp = ({title, color = colors.primary, onClick, style={}}) => {
    function onClickInternal(event){
        event.preventDefault();
        onClick();
    }
    return <Button style={style} color={color} onClick={onClickInternal}>{title}</Button>;
}

const Button = styled.button`
  width: 100%;
  padding: .5rem;
  border: 2px solid ${props => props.color};
  color: ${props => props.color};
  background-color: transparent;
  border-radius: 1rem;
  font-size: larger;
  margin-bottom: 1rem;
  &:hover {
    cursor: pointer;
    background-color: ${props => props.color};
    color: ${colors.main}
  }
`;
export default ButtonCmp;