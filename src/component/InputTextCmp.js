import styled from "styled-components";
import colors from "../style/colors";

const InputTextCmp = ({
                          title,
                          value,
                          setValue,
                          placeholder = "",
                          type = "text",
                          style = {},
                          validation = {message: "", validate: (text) => true}
                      }) => {

    const id = Math.random().toString();
    let validated = validation.validate(value);

    function onChange(event) {
        setValue(event.target.value);
    }

    return <Container style={style}>
        <Label htmlFor={id}>{title}</Label>
        <InputText id={id} value={value} onChange={onChange} type={type} placeholder={placeholder}/>
        {!validated && <Error>{validation.message}</Error>}
    </Container>
}

const Container = styled.div`
  margin-top: 1rem;
  width: 100%;
  margin-bottom: 1.5rem;
`;

const InputText = styled.input`
  width: 100%;
  text-align: center;
  height: 2.5rem;
  background-color: transparent;
  color: ${colors.main};
  font-size: larger;
  border: none;
  border-bottom: 1px solid;

  &:focus {
    outline: none;
  }
`;

const Label = styled.label``;
const Error = styled.p`
  margin-top: 0.5rem;
  color: ${colors.danger}
`;

export default InputTextCmp;
