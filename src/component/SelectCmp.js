import styled from "styled-components";
import colors from "../style/colors";

const SelectCmp = ({value, setValue, options = []}) => {
    const onChange = (event) => {
        setValue(event.target.value);
    }

    return <Select value={value} onChange={onChange}>
        {options.map((option, id) => <Option key={`${option.value}-${Math.random()}`} value={option.value}>{option.text}</Option>)}
    </Select>
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

export default SelectCmp;