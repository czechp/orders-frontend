import styled from "styled-components";

const FormCmp = ({children}) => {
    return <Form>
        {children}
    </Form>
}

const Form = styled.form`
    width: 40%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export default FormCmp;

