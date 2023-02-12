import styled from "styled-components";
import { Theme } from "../../styles/Theme";

interface Props {
  type: string;
  label?: string;
}

const InputField = styled.input`
  width: 100%;
  color: ${Theme.colors.primaryTextColor};
  background-color: transparent;
  border: 1px solid ${Theme.colors.primaryTextColor};
  border-radius: ${Theme.input.radius};
  padding: ${Theme.input.padding};
  /* font-size: 1rem; */
  font-weight: 500;
  margin-bottom: ${Theme.margins.default};
  margin-top: ${Theme.margins.default};
`;
const Label = styled.label`
  color: ${Theme.colors.darkText};
  /* font-size: 1rem; */
  padding-bottom: ${Theme.margins.default};
  /* margin-bottom: ${Theme.margins.default}; */
  &::after {
    padding-bottom: ${Theme.margins.default};
  }
`;

const Input: React.FC<Props> = (props) => {
  return (
    <>
      <Label>
        {props.label}
        <InputField type={props.type} />
      </Label>
    </>
  );
};

export default Input;
