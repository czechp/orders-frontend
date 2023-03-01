import styled from "styled-components";
import colors from "../style/colors";

const SelectCmp = ({value, setValue, options = [], title}) => {
    const onChange = (event) => {
        setValue(event.target.value);
    }

    const selectId = Math.random();

    return <>
        {title && <Label htmlFor={selectId}>{title}</Label>}
        <Select id={selectId} value={value} onChange={onChange}>
            {options.map((option, id) => <Option key={`${option.value}-${Math.random()}`}
                                                 value={option.value}>{option.text}</Option>)}
        </Select>
    </>
}

const Select = styled.select`
  width: 100%;
  margin-bottom: 2rem;
  padding: .5rem;
  background-color: transparent;
  color: ${colors.main};
  text-align: center;
  font-size: larger;
`;

const Option = styled.option`
  color: ${colors.main};
  background-color: ${colors.background};
`;

const Label = styled.label`
  margin-bottom: 1rem;
  margin-top: 1rem;
  display: block;
`
export default SelectCmp;