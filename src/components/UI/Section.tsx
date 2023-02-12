import styled from "styled-components";
import { Breakpoints } from "../../styles/Breakpoints";
import { Theme } from "../../styles/Theme";

interface Props {
  marginTop?: string;
}
const Section = styled.section<Props>`
  grid-area: content;
  width: 100%;
  padding: ${Theme.paddings.default};

  margin-top: ${(props) =>
    props.marginTop ? props.marginTop : Theme.margins.default};
  border-radius: ${Theme.borders.radius};
  background: ${Theme.colors.white};

  @media ${Breakpoints.sm} {
    width: auto;
    margin-inline: 10px;
  }
`;
export default Section;
