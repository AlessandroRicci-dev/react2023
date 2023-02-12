import styled from "styled-components";
import { Theme } from "../../styles/Theme";
import { Breakpoints } from "../../styles/Breakpoints";
interface Props {
  center?: boolean;
}
const Button = styled.button`
  display: block;
  width: fit-content;
  color: ${Theme.colors.white};
  border: 1px solid ${Theme.colors.primary};
  background-color: ${Theme.colors.primary};
  padding-inline: 20px;
  padding-block: 10px;
  border-radius: ${Theme.input.radius};
  /* font-size: ${({ theme }) => theme.fonts.sizes.sm}; */
  @media ${Breakpoints.sm} {
    width: 100%;
  }
`;
export default Button;
